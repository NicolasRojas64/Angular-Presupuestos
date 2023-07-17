import { Component, OnInit } from '@angular/core';
import { ingEgrService } from '../services/ingEgr.service';
import { Ingreso } from 'src/models/ingreso.model';
import { Egreso } from 'src/models/egreso.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  
  name:string;
  value:number;
  type:string = "ing";

  constructor(private ingEgr:ingEgrService) {}
  
  add():void {
    if(this.type === "ing"){
      this.ingEgr.ingresos.push(new Ingreso(this.name, this.value));
    }else if(this.type === "egr"){
      this.ingEgr.egresos.push(new Egreso(this.name, this.value));
    }
  }

  cambio(event){
    this.type = event.target.value;
  }

}
