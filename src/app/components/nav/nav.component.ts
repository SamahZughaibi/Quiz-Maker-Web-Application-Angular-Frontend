import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input('userEmail')
  userEmail: string;

  constructor(private router: Router) {
    this.userEmail = '';
  }
  ngOnInit() {}

  goToResults() {
    this.router.navigate(['../myResults'], {
      queryParams: { userEmail: this.userEmail },
    });
  }
  goToHome() {
    this.router.navigate(['../home'], {
      queryParams: { userEmail: this.userEmail },
    });
  }
  goToEditName() {
    this.router.navigate(['../userInfo'], {
      queryParams: { userEmail: this.userEmail },
    });
  }
  goToMyQuizzes() {
    this.router.navigate(['../myQuizzes'], {
      queryParams: { userEmail: this.userEmail },
    });
  }
}
