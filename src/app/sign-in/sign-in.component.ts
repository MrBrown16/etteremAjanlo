import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user:any={
    email:'',
    password:'',
  }
  constructor(private auth:AuthService, private router:Router){

  }
  googleAuth(){
    this.auth.googleAuth().then(()=>this.router.navigate(['/ajanlo']));
  }

  getLoggedUser(){
    return this.auth.getLoggedUser();
  }
  signOut(){
    this.auth.signOut();
  }

  signIn(){
    this.auth.signIn(this.user.email, this.user.password)
  }
}
