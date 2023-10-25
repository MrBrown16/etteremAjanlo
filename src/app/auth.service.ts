import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url='https://us-central1-restaurant-a4ec7.cloudfunctions.net/api/'
  constructor(private afAuth:AngularFireAuth, private router:Router, private http:HttpClient) {
   }
    googleAuth(){
      return this.afAuth.signInWithPopup(new GoogleAuthProvider());
      // return this.afAuth.signInWithRedirect(new GoogleAuthProvider());
    }

    getUsers(){
      this.getLoggedUser().subscribe(
        (user)=>{
          let t = user?.getIdToken().then(
            (token)=>{

              let headers = new HttpHeaders().set('Authorization',token)
              return this.http.get(this.url+'users', {headers}).subscribe(
                (users)=>console.log('felhasználók: ',users)
              )
            }
          )
        }
      )
    }

    getLoggedUser(){
      return this.afAuth.authState;
    }

    signOut(){
      return this.afAuth.signOut()
    }
    
    signUp(email:string, password:string){
      return this.afAuth.createUserWithEmailAndPassword(email,password);
      // this.sendVerificationEmail().then(()=>{}).catch((e)=>{console.log(e)})
    }
    signIn(email:string, password:string){
      return this.afAuth.signInWithEmailAndPassword(email,password)
    }

    sendVerificationEmail(){
      return this.afAuth.currentUser.then((user)=>user?.sendEmailVerification()).then(()=>this.router.navigate(['/verifyemail'])).catch((e)=>{alert(e)})
    }

    forgotEmail(email:string){
      return this.afAuth.sendPasswordResetEmail(email)
    }

  }

