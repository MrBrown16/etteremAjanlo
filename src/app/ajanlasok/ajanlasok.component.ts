import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';
import { Kritika } from '../kritika';
import { map } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ajanlasok',
  templateUrl: './ajanlasok.component.html',
  styleUrls: ['./ajanlasok.component.css']
})
export class AjanlasokComponent {
  szo:string=""
  kritikak:any
  edit:boolean=false;
  tetelek:any=[]
  user:any;
  users:any;
  constructor(private base:BaseService, private router:Router, private auth:AuthService){

    this.base.getKritikas().snapshotChanges().pipe(
      map((changes)=>changes.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe({
      next:(adatok)=>this.kritikak=adatok,
      error:(hiba)=>console.log(hiba)      
    })
    this.auth.getLoggedUser().subscribe(
      {
        next:(u)=>{
          this.user=u;
          console.log("Sikeres belépés");
        },
        error: (e)=>console.log("error: "+e)
      }
    )
      // this.auth.getUsers()
      //TODO:uncomment
  }
  torol(kritika:Kritika){
    this.base.deleteKritika(kritika)
  }
  modosit(kritika:Kritika){
    this.router.navigate(['/ujkritika', kritika])
  }
  // megrendel(kritika:Kritika, mennyiseg:string){
  //   console.log(kritika.megnevezes, mennyiseg)
  //   this.kosar.addTetel(kritika!, mennyiseg)
  //   this.tetelek=this.kosar.getTetelek();
  // }

  megrendeltE(key:string){
    return this.tetelek.find((rekord:any)=>rekord.kritikaKey==key)
  }
}
