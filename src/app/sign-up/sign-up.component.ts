import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user:any={
    email:'',
    password:'',
  }
  password:string='';
  constructor(private auth:AuthService, private router:Router){

  }
  googleAuth(){
    this.auth.googleAuth().then(()=>this.router.navigate(['/ajanlo']));
  }

  getLoggedUser(){
    return this.auth.getLoggedUser();
  }

  signUp(){
    this.auth.signUp(this.user.email, this.user.password).then(()=>this.auth.sendVerificationEmail()).catch((e)=>console.log("Reg Hiba:",e));
  }
}
