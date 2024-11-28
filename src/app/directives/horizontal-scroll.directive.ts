import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
  standalone: true // Marca la directiva como standalone
})
export class HorizontalScrollDirective {
  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    const target = event.currentTarget as HTMLElement;
    if (target) {
      event.preventDefault(); // Evita el scroll vertical
      target.scrollLeft += event.deltaY; // Convierte el movimiento a horizontal
    }
  }
}
