import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
email:string='';

  constructor(private auth:AuthService){}

  forgotPassword(){
    this.auth.forgotEmail(this.email)
  }
}
