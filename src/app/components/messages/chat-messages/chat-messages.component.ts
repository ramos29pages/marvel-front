import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ChatComponent } from '../chat/chat.component';
import { ActivatedRoute } from '@angular/router';
import { ProfileMessagesComponent } from '../profile-messages/profile-messages.component';

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [FooterComponent, ChatComponent, ProfileMessagesComponent],
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss',
})
export class ChatMessagesComponent implements OnInit {
  protected ahora = new Date();
  protected userName = 'Daniel Ramos';
  protected onlyReserved = true;
  protected userCountryFlag = 'it';
  protected country = 'Italia';
  protected userCategories: string[] = [
    'plastic',
    'stainless-steel',
    'paper',
    'non-ferrous-metals',
  ];
  protected profileURL: string = 'https://robohash.org/none';
  protected userCompany = 'Company';
  protected userWorkPosition = 'Work Position';
  protected mobile = '+57 3002554141';
  protected website = 'hhtps://missionrecycling.com/users';
  protected email = 'alguien@algo.com';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('PARAMETER::::',params);
      this.userName = params['id'];
      this.profileURL = `https://robohash.org/${this.userName}`
    });
  }
}
