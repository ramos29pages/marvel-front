import { UserSearchComponent } from '../user-search/user-search.component';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-company',
  standalone: true,
  imports: [UserSearchComponent],
  templateUrl: './search-company.component.html',
  styleUrl: './search-company.component.scss'
})
export class SearchCompanyComponent {

  @ViewChild('countrySelect') countrySelect!: ElementRef<HTMLSelectElement>;

  openSelect() {
    // Enfocar el select
    this.countrySelect.nativeElement.focus();

    setTimeout(() => {
      // Simular un clic para abrir el menú desplegable
      const event = new Event('click');
      this.countrySelect.nativeElement.dispatchEvent(event);
      console.log(event);
    }, 100); // Espera un momento antes de simular el clic
  }
}
