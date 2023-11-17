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
  loggedIn: boolean;
  users: any[] = [];
  userExists: boolean;

  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;

  constructor(private router: Router, private userService: UserService) {
    this.loggedIn = false;
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
    // console.log("current email: ", this.emailInput);
    // console.log("current loggedIn: ", this.loggedIn);
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.users = data;
        console.log('Users: ', this.users);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  onSubmit(): void {
    // console.log("current email: ", this.emailInput.value);
    for (let user of this.users) {
      if (user.email === this.emailInput.value) {
        this.userExists = true;
        setTimeout(() => {
          this.loginRedirecting();
        }, 2000);
        break;
      }
    }
    if (!this.userExists) {
      const body = {
        email: this.emailInput.value,
        fullName: this.nameInput.value,
      };
      this.userService.postUser(body).subscribe({
        next: (data) => {
          // alert("User created successfully!");
        },
        error: (error) => {
          console.log(error);
        }
      });
      // console.log(name);
      this.loggedIn = true;
      this.router.navigate(['/home'], {
        queryParams: { name: this.nameInput.value, email: this.emailInput.value },
      });
    }
  }
  loginRedirecting(): void{
    this.router.navigate(['/login']);
  }
}
