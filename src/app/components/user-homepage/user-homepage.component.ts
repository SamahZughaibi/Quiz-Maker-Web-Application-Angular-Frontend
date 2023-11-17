import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent {
  userName: string;
  userEmail: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.userName = "";
    this.userEmail = "";
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      this.userEmail = params['email'];
    });
    
  }
}
