import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizResult } from 'src/app/models/quizResult.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-results-page',
  templateUrl: './my-results-page.component.html',
  styleUrls: ['./my-results-page.component.css'],
})
export class MyResultsPageComponent {
  userEmail: string;
  results: QuizResult[] = [];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.userEmail = "";
    console.log("userEmail at constructor: ", this.userEmail)
   
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userEmail = params['email'];
    });
    this.getResults(this.userEmail);
    console.log(this.userEmail);
  }
  getResults(email: string){
    this.userService.getUserResults(email).subscribe({
      next: (data) => {
        console.log(data);
        this.results = data;
        console.log(this.results);
        
      },
      error: (error) => {

      }
    });
  }
}
