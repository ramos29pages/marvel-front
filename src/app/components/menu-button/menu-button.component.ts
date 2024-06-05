import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [RouterLink, CapitalizePipe, RouterLinkActive, RouterModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  @Input() routerLink : string = 'members';
  @Input() label : string = 'Members';
  @Input() iconClass : string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  isActive(route: string): boolean {
    console.log(route);
    console.log(this.router.url);
    // Comprueba si la ruta actual es la ruta proporcionada
    return this.router.url === '/'+route;
}

}
