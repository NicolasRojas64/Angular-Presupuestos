import { Component, Input, OnInit } from '@angular/core';
import { ingEgrService } from '../services/ingEgr.service';
import { Egreso } from 'src/models/egreso.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {

  egresos: Egreso[];

  constructor(private ingEgr: ingEgrService) { 
    this.egresos = this.ingEgr.egresos;
  }

  delete(index:number):void {
    this.egresos.splice(index, 1);
  }

  ingresosTotales():number {
    let number = 0;
      for(let i of this.ingEgr.ingresos){
        number += i.value;
      }
    return number;
  }

  porcentajeEgresos(index:number) {
    let egr:number = this.egresos[index].value;
    return (egr)/this.ingresosTotales();
  }

}
