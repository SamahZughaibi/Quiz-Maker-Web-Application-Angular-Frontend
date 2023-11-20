import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loggedIn: boolean;
  users: any[] = [];
  userExists: boolean;
  
  loginForm: FormGroup;
  emailInput: FormControl;
  

  constructor(private router: Router, private userService: UserService){
    this.loggedIn = false;
    this.userExists = true;

    this.emailInput = new FormControl("", Validators.required)
    this.loginForm = new FormGroup({
      email: this.emailInput,
    });
  }

  ngOnInit(){
    this.getAllUsers();
  } 

  getAllUsers(): void{
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        console.log("data: ", data);
        this.users = data;
        console.log("Users: ", this.users);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  onSubmit(): void {
    // console.log("current email: ", this.emailInput.value);
    for(let user of this.users){
      if(user.email === this.emailInput.value){
        this.userExists = true;
        this.loggedIn = true;
        const name: string = user.fullName;
        // console.log(name);
        
        this.router.navigate(['/home'], { queryParams: { userEmail: user.email }}); 
        return;
      }
    }
    this.userExists = false;
    
  }
}
