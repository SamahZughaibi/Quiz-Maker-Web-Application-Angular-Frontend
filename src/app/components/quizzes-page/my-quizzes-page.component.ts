import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Choice } from 'src/app/models/choice.model';
import { Question } from 'src/app/models/question.mode';
import { Quiz } from 'src/app/models/quiz.model';
import { ChoiceService } from 'src/app/services/choice.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-quizzes-page',
  templateUrl: './my-quizzes-page.component.html',
  styleUrls: ['./my-quizzes-page.component.css'],
})
export class MyQuizzesPageComponent {
  myQuizzes: any[] = [];

  userEmail: string;

  selectedQuiz: any;
  selectedQuestion: any;

  newQuizTitle: string = '';

  newQuestionText: string = '';
  newQuestionScore: number = 10;

  newChoiceTitle: string = '';
  choiceCorrect: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private quizService: QuizService,
    private questionService: QuestionService,
    private choiceService: ChoiceService,
    private router: Router
  ) {
    this.userEmail = '';
    this.choiceCorrect = true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userEmail = params['userEmail'];
    });
    // first get quizzes
    this.getQuizzes();
  }

  getQuizzes(): Quiz[] {
    this.userService.getUserQuizzes(this.userEmail).subscribe({
      next: (data) => {
        this.myQuizzes = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    return this.myQuizzes;
  }

  selectQuiz(quiz: Quiz): void {
    // when a quiz gets clicked
    this.selectedQuiz = quiz;
    this.selectedQuestion = null;
    // then get the quizz's questions
    this.quizService.getQuizQuestions(quiz.quizId).subscribe({
      next: (data) => {
        quiz.questions = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  selectQuestion(question: Question): void {
    this.selectedQuestion = question;
    // get the choices of the selected question
    this.questionService.getQuestionChoices(question.questionId).subscribe({
      next: (data) => {
        question.choices = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addQuiz(): void {
    if (this.newQuizTitle.trim() !== '') {
      // post quiz to user
      const body = {
        title: this.newQuizTitle.trim(),
        owner: {
          email: this.userEmail,
        },
      };

      this.quizService.postQuiz(body).subscribe({
        error: (error) => {
          console.log(error);
        },
      });

      //reload to show the newly added quiz
      location.reload();
    }
  }

  addQuestion(): void {
    if (this.selectedQuiz && this.newQuestionText.trim() !== '') {
      //post question to quiz
      const body = {
        questionText: this.newQuestionText.trim(),
        pointsAssigned: this.newQuestionScore,
        homeQuiz: {
          quizId: this.selectedQuiz.quizId,
        },
      };
      this.questionService.postQuestion(body).subscribe({
        error: (e) => {
          console.log(e);
        },
      });

      //reload to add the newly added question
      location.reload();
    }
  }

  addChoice(): void {
    if (this.selectedQuestion && this.newChoiceTitle.trim() !== '') {
      this.selectedQuestion.choices.push(
        new Choice(
          -1,
          this.newChoiceTitle.trim(),
          this.choiceCorrect,
          this.selectedQuestion
        )
      );
      //post choice to question
      const body = {
        choiceText: this.newChoiceTitle,
        correctAnswer: this.choiceCorrect,
        homeQuestion: {
          questionId: this.selectedQuestion.questionId,
        },
      };
      this.choiceService.postChoice(body).subscribe({
        error: (e) => {
          console.log(e);
        },
      });
      this.newChoiceTitle = ''; // clear the input field
    }
  }

  changeValue(): void {
    this.choiceCorrect = !this.choiceCorrect;
  }

  deleteQuiz(quiz: Quiz) {
    this.quizService.deleteQuiz(quiz.quizId).subscribe({
      error: (e) => {
        console.log(e);
      },
    });
    const index: number = this.myQuizzes.indexOf(quiz);
    this.myQuizzes.splice(index, 1);
  }

  deleteQuestion(question: Question) {
    this.questionService.deleteQuestion(question.questionId).subscribe({
      error: (e) => {
        console.log(e);
      },
    });

    const index: number = this.selectedQuiz.questions.indexOf(question);
    this.selectedQuiz.questions.splice(index, 1);
  }

  deleteChoice(choice: Choice) {
    this.choiceService.deleteChoice(choice.choiceId).subscribe({
      error: (e) => {
        console.log(e);
      },
    });

    const index: number = this.selectedQuestion.choices.indexOf(choice);
    this.selectedQuestion.choices.splice(index, 1);
  }

  // when results button gets clicked
  goToResults(quizId: number) {
    this.router.navigate(['../../quizResults'], {
      queryParams: { quizId: quizId, userEmail: this.userEmail },
    });
  }

  // when preview button gets clicked
  goToQuizTakingPage(quizId: number, quizTitle: string) {
    this.router.navigate(['../../quizTakingForm'], {
      queryParams: {
        quizId: quizId,
        userEmail: this.userEmail,
      },
    });
  }
}