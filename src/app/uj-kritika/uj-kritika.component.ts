import { Component } from '@angular/core';
import { Kritika } from '../kritika';
import { BaseService } from '../base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uj-kritika',
  templateUrl: './uj-kritika.component.html',
  styleUrls: ['./uj-kritika.component.css']
})
export class UjKritikaComponent {
  kritika:Kritika={}

  constructor(private base:BaseService, private aroute:ActivatedRoute, private router:Router){
    this.aroute.paramMap.subscribe(
      (param:any)=>this.kritika=JSON.parse(JSON.stringify(param.params))
    )
    
  }

  ujKritika(){
    this.base.newKritika(this.kritika)
    this.router.navigate(['/ajanlo'])
  }
}
