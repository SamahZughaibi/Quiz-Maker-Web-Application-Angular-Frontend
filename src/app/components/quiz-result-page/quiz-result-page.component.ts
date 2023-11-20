import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-result-page',
  templateUrl: './quiz-result-page.component.html',
  styleUrls: ['./quiz-result-page.component.css']
})
export class QuizResultPageComponent {
  quizId: number;
  userEmail: string;
  
  constructor(private activatedRoute: ActivatedRoute){
    this.quizId = -1;
    this.userEmail = "";
  }
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.quizId = params['quizId'];
      this.userEmail = params['userEmail'];
    });
  }
}
