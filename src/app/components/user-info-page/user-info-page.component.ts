import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent {
  userEmail: string = '';
  userName: string = '';

  nameInput: FormControl = new FormControl("", Validators.required);
  nameForm: FormGroup = new FormGroup({name: this.nameInput});

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService){}
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.userEmail = params['userEmail'];
    });
    this.getUser(this.userEmail);
  }
  getUser(userEmail: string): void{
    this.userService.getUserByEmail(userEmail).subscribe({
      next: (data) => {
        this.userName = data.fullName;
        console.log(data);
        console.log(this.userName);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  updateUserName(newName: string){
    const body = {
      fullName: newName,
    };
    this.userService.patchUserName(this.userEmail, body).subscribe({
      next: (data) => {
        this.userName = data.fullName;
      },
      error: (error) => {
        console.log(error);
      }
    });
    location.reload();
  }
}
