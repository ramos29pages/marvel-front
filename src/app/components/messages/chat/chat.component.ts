import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('id') || '';
  }

  protected iconURL: string = '../../assets/icons/home.svg';
}
