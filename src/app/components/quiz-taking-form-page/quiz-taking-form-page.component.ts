import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Choice } from 'src/app/models/choice.model';
import { Question } from 'src/app/models/question.mode';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizResultService } from 'src/app/services/quizResult.service';

@Component({
  selector: 'app-quiz-taking-form-page',
  templateUrl: './quiz-taking-form-page.component.html',
  styleUrls: ['./quiz-taking-form-page.component.css'],
})
export class QuizTakingFormPageComponent {
  userEmail: string;
  quizId: number;
  quizTitle: string;
  questions: Question[] = [];
  choices: Choice[] = [];
  quizScore: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private questionService: QuestionService,
    private quizResultService: QuizResultService,
    private router: Router,
  ) {
    this.userEmail = '';
    this.quizId = -1;
    this.quizTitle = '';
    this.quizScore = 0;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userEmail = params['userEmail'];
      this.quizId = params['quizId'];
      this.quizTitle = params['quizTitle'];
    });
    this.getQuestionsAndChoices();
  }
  getQuestionsAndChoices() {
    this.quizService.getQuizQuestions(this.quizId).subscribe(
      data => {
        this.questions = data;
        for(let question of this.questions){
          this.quizScore += question.pointsAssigned;
          const choicesCall = this.questionService.getQuestionChoices(question.questionId);

          forkJoin([choicesCall]).subscribe(
            ([choicesData]) =>  {
              question.choices = choicesData;
              console.log(choicesData);
            },
            error => {
              console.log("error fetching choices: ", error);
            }
          );
        }
      },
      error => {
        console.log("error fetching questions: ", error);
      }
    );
  }
  onSubmit(){
    let userScore = 0 ;
    for(let question of this.questions){ //loop through questions to get the question ids (radio button elements names)
      const elementsName = question.questionId.toString();
      const questionChoices = document.getElementsByName(elementsName) as NodeListOf<HTMLInputElement>;
      
      //then see which choice was chosen by the user
      for(let i in questionChoices){
        if(questionChoices[i].checked){// if this choice was chosen by the quiz taker check if it's correct
          if(questionChoices[i].value === "true"){// if it's the correct answer add the question points
            userScore += question.pointsAssigned;
          }
        }
      }
    }
    userScore /= this.quizScore;
    userScore *= 100; // score in percentage

    //post a QuizResult then redirect to myResults page
    this.addResult(userScore);
    setTimeout(() => { // 1 second delay to show the new result in the result page
      this.router.navigate(['../../myResults'], { queryParams: { userEmail: this.userEmail }}); ;
    }, 1000);
  }
  addResult(userScore: number): void{
    const body = {
      quizTaker: {
        email: this.userEmail
      },
      quizTaken: {
        quizId: this.quizId,
      },
      totalScore: userScore,
    };
    this.quizResultService.postResult(body).subscribe({
      error: (error) => {
        console.log(error);
      }
    });
  }
}
