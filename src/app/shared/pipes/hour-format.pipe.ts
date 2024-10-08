import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'hourFormat',
  standalone: true
})
export class HourFormatPipe implements PipeTransform {

  transform(value:  
    Date): string {
       const today = new Date();
       const yesterday = new Date(today);
       yesterday.setDate(today.getDate() - 1);

       if (value < yesterday) {
         const dayOfWeek = new Date(value).toLocaleDateString('en-US', { weekday: 'long' });
         return dayOfWeek;
       } else if (value.toDateString() === yesterday.toDateString()) {
         return 'Yesterday';
       } else {
         return format(value, 'HH:mm'); // Formato de 24 horas
       }
     }

}
