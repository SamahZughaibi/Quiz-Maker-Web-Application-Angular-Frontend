import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input("userName")
  userName: string;

  @Input("userEmail")
  userEmail: string;

  constructor(private activatedRoute: ActivatedRoute){
    this.userEmail = "";
    this.userName = "";
  }
  ngOnInit(){
    console.log(this.activatedRoute.snapshot.params);
  }
}
