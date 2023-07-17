import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../models/ingreso.model';
import { ingEgrService } from '../services/ingEgr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private ingEgr: ingEgrService) {}

  ingresosTotales():number {
    let number = 0;
      for(let i of this.ingEgr.ingresos){
        number += i.value;
      }
    return number;
  }

  egresosTotales():number {
    let number = 0;
      for(let i of this.ingEgr.egresos){
        number += i.value;
      }
    return number;
  }

  porcentajeEgresos():number {
    return (this.egresosTotales())/this.ingresosTotales();
  }

}
