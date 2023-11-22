import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  users: any[] = [];
  userExists: boolean;

  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;

  constructor(private router: Router, private userService: UserService) {
    this.userExists = false;

    this.nameInput = new FormControl('', Validators.required);
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.registerForm = new FormGroup({
      email: this.emailInput,
      name: this.nameInput,
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
    for (let user of this.users) {
      // if the email already registered, redirect to login page
      if (user.email === this.emailInput.value) {
        this.userExists = true;
        // a message will be displayed then the user will be redirected
        setTimeout(() => {
          this.loginRedirecting();
        }, 2000);
        break;
      }
    }
    if (!this.userExists) {
      // if the email is not registered, add the user to the database
      const body = {
        email: this.emailInput.value,
        fullName: this.nameInput.value,
      };
      this.userService.postUser(body).subscribe({
        error: (error) => {
          console.log(error);
        },
      });
      this.router.navigate(['/home'], {
        queryParams: { userEmail: this.emailInput.value },
      });
    }
  }
  loginRedirecting(): void {
    this.router.navigate(['/login']);
  }
}
