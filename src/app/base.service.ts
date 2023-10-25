import { Injectable } from '@angular/core';
import { Kritika } from './kritika';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refKritikak : AngularFireList<Kritika>; 
  constructor(private db:AngularFireDatabase) {
    this.refKritikak=db.list('/ajanlo');
   }

   getKritikas(){
    return this.refKritikak;
   }

   newKritika(kritika:Kritika){
    if (kritika.key) return this.refKritikak.update(kritika.key,kritika)
    return this.refKritikak.push(kritika)
   }

   deleteKritika(Kritika:Kritika){
    return this.refKritikak.remove(Kritika.key)
   }
}
