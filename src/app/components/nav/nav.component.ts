import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.userEmail = "";
    this.userName = "";
  }
  ngOnInit(){
    // console.log(this.activatedRoute.snapshot.params);
    console.log("userEmail From nav: ", this.userEmail);
  }
  goToResults(){
    this.router.navigate(['../myResults'], { queryParams: {  email: this.userEmail }}); 
  }
}
