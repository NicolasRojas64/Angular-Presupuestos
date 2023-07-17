import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../models/ingreso.model';
import { ingEgrService } from '../services/ingEgr.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent{

  ingresos: Ingreso[];

  constructor(private ingEgr: ingEgrService) {
    this.ingresos = this.ingEgr.ingresos;
  }

  delete(index:number):void {
    this.ingresos.splice(index, 1);
  }

}
