import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent {
  userName: string;
  userEmail: string;
  quizzes: Quiz[] = [];
  quizNotFound: boolean;
  quizId: number;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) {
    this.userName = "";
    this.userEmail = "";
    this.quizNotFound = false;
    this.quizId = 0;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      this.userEmail = params['email'];
    });
    console.log(this.userName);
    this.getQuizzes();
  }
  
  validateId(id: number){
    for(let quiz of this.quizzes){
      if(quiz.quizId === id){
        
        //redirect to taking-quiz with the id
        return;
      }
    }
    //if the loop finished without redirecting
    this.quizNotFound = true;
  }

  getQuizzes(): void{
    this.quizService.getAllQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data;
        console.log(data);
        console.log(this.quizzes);        
      },
      error: (error) => {
        console.log(error);        
      }
    });
  }
}
