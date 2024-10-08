import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = io('http://localhost:3000', {
      withCredentials: true,
      transports: ['websocket']
    });
    this.socket.emit('register', '2001');
    console.log('You have logged in', this.socket.id);
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }
}
