import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  month: string[] = [];

  constructor() {
    this.generarMeses();
  }

  private generarMeses() {
    const actualMonth = new Date().getMonth();
    const actualYear = new Date().getFullYear();

    for (let i = 0; i < 7; i++) {
      // Crear una nueva fecha aumentando el mes
      let date = new Date(actualYear, actualMonth + i, 1);
      // Opciones para formatear la fecha a nombre de mes y año
      let options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
      // Agregar el mes formateado al arreglo
      this.month.push(date.toLocaleDateString('es-ES', options));
    }
  }
}
