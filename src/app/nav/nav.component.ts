import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  csukva:any=false;
  user:any;
  constructor(private auth:AuthService){
    this.auth.getLoggedUser().subscribe(
      {
        next:(u)=>{
          this.user=u;
          console.log("Sikeres belépés");
        },
        error: (e)=>console.log("error: "+e)
      }
    )
  }
  signOut(){
    this.auth.signOut();
  }
}
