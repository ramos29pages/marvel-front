import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [RouterLink, CapitalizePipe, RouterLinkActive, RouterModule, CommonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent implements OnInit{
  @Input() routerLink : string = 'members';
  @Input() label : string = 'Members';
  @Input() iconClass : string = '';
  @Input() notification : boolean = false;

  notifications = 37

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.isActive('/home');
  }

  isActive(route: string): boolean {
    return this.router.url === '/dashboard/'+route;
}

}
