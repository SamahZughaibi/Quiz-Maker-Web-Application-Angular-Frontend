import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  users: any[] = [];
  userExists: boolean;

  loginForm: FormGroup;
  emailInput: FormControl;

  constructor(private router: Router, private userService: UserService) {
    this.userExists = true;

    this.emailInput = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      email: this.emailInput,
    });
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  onSubmit(): void {
    //check if user exists
    for (let user of this.users) {
      if (user.email === this.emailInput.value) {
        this.userExists = true;
        const name: string = user.fullName;
        //if user exist, redirect to homepage
        this.router.navigate(['/home'], {
          queryParams: { userEmail: user.email },
        });
        return; //stop loop
      }
    }
    //if user doesn't exist
    this.userExists = false;
  }
}
