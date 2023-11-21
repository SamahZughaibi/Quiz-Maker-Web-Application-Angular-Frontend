import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizResult } from 'src/app/models/quizResult.model';
import { QuizResultService } from 'src/app/services/quizResult.service';

@Component({
  selector: 'app-quiz-result-page',
  templateUrl: './quiz-result-page.component.html',
  styleUrls: ['./quiz-result-page.component.css']
})
export class QuizResultPageComponent {
  quizId: number;
  userEmail: string;
  results: QuizResult[] = [];
  quizResults: QuizResult[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, private quizResultService: QuizResultService){
    this.quizId = -1;
    this.userEmail = "";
  }
  ngOnInit(): void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.quizId = params['quizId'];
      this.userEmail = params['userEmail'];
    });
    this.getResults();
    
  }
  getResults(): void{
    this.quizResultService.getResults().subscribe({
      next: (data) => {
        this.results = data;
        this.filterByQuizId();
      }, 
      error: (error) => {
        console.log(error);
      }
    });
  }
  filterByQuizId(): void{
    this.quizResults = this.results.filter((result) => result.quizTaken.quizId == this.quizId);
    this.formatDate();
  }
  formatDate(): void{
    for(let result of this.quizResults){
      const formattedDate = new Date(result.date);
      result.date = formattedDate.toString();
    }
  }
}
