import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, MenuButtonComponent, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
