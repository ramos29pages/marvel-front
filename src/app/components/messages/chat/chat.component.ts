import { HourFormatPipe } from './../../../shared/pipes/hour-format.pipe';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SocketService } from '../../../services/socket.service';
import { MessagesByDate } from '../../../models/LastMessage';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HourFormatPipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  id !: number;
  protected iconURL: string = '../../assets/icons/home.svg';
  messageForm!: FormGroup;

  messagesByDate : MessagesByDate = {
    '12-08-2024': [],
  };

  dias = Object.keys(this.messagesByDate);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    let pv = this.route.snapshot.paramMap.get('id') as string;
    this.id = parseInt(pv, 10) || 0;
    console.log('CHAT-COMPONENT::: ', this.id);
    this.messageForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  meet() {
    this.router.navigate(['dashboard/meet']);
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const message = this.messageForm.value.message;
      let receiverId = this.id;
      this.socketService.emit('private_message', { receiverId, message });
      let newMessage = {
        id: 11,
        message: message,
        createdDate: new Date(),
        senderId: 2,
        receiverId: this.id,
        read: false,
      }
      this.messagesByDate['12-08-2024'].push(newMessage);

      this.messageForm.reset();

      let newResponseMessage = {
        id: 11,
        message: message,
        createdDate: new Date(),
        senderId: 47,
        receiverId: this.id,
        read: false,
      }
      setTimeout(() =>{
        this.messagesByDate['12-08-2024'].push(newResponseMessage);
      }, 1500);
    }
  }
}
