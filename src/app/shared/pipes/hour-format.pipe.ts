import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourFormat',
  standalone: true
})
export class HourFormatPipe implements PipeTransform {

  transform(value: Date | string): string {
    let fecha = new Date(value);
    let horas = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
  }

}
