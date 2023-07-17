import { Egreso } from "src/models/egreso.model";
import { Ingreso } from "../../models/ingreso.model";

export class ingEgrService {
  ingresos: Ingreso[];
  egresos: Egreso[];

  constructor() {
    this.ingresos = [
      new Ingreso('Salario', 2100),
      new Ingreso('Venta coche', 1500),
    ];

    this.egresos = [
        new Ingreso('Renta departamento', 900),
        new Ingreso('Ropa', 435),
      ];
  }
}
