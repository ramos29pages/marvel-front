import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    console.log('home is initialized');
  }

}
