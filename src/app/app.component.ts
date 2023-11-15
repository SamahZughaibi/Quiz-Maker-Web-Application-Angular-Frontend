import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizmaker';
  userEmail: string;
  userName: string;

  constructor(){
    this.userEmail = "s"; 
    this.userName = "d";
  }
}
