import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  protected username : string = '@username';
  protected imageProfileURL: string = 'https://robohash.org/ramos';
  protected logoURL: string = '../../';

}
