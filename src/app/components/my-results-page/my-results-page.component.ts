import { Component } from '@angular/core';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userEmail = '';
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userEmail = params['userEmail'];
    });
    this.getResults(this.userEmail);
  }
  getResults(email: string) {
    this.userService.getUserResults(email).subscribe({
      next: (data) => {
        this.results = data;
        this.formatDate();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  formatDate(): void {
    for (let result of this.results) {
      const formattedDate = new Date(result.date);
      result.date = formattedDate.toString();
    }
  }
}
