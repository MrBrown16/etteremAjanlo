import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjanlasokComponent } from './ajanlasok/ajanlasok.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UjKritikaComponent } from './uj-kritika/uj-kritika.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'ajanlo', component:AjanlasokComponent, pathMatch:'full'},
  
  {path:'signin', component:SignInComponent, pathMatch:'full'},
  {path:'signup', component:SignUpComponent, pathMatch:'full'},
  {path:'ujkritika', component:UjKritikaComponent},
  {path:'verifyemail', component:VerifyEmailComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'', redirectTo:'/ajanlo', pathMatch:'full'},
  {path:'**', redirectTo:'/ajanlo', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
