import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() name !: string;
  protected iconURL: string = '../../assets/icons/home.svg';

  constructor(private route: ActivatedRoute,private router: Router){
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('id') || '';
  }

  meet(){
    this.router.navigate(['dashboard/meet',]);
  }

}
