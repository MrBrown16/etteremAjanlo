import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tomb:any[], keresendo:string): any {
    if (!tomb) return null;
    if (!keresendo) return tomb;

    return tomb.filter(
      (kritika)=>kritika.etterem.toLowerCase().includes(keresendo.toLowerCase())
    )
  }

}
