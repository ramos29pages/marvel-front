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
    'electrics-electronics',
    'ferrous-metals',
    'non-ferrous-metals',
    'paper',
    'plastic',
    'special-alloys',
    'stainless-steel',
    'textile',
    'tyres-rubber'
  ];
  protected profileURL: string = 'https://robohash.org/none';
  protected userCompany = 'Ferrous Technologies';
  protected userWorkPosition = 'Sales';
  protected mobile = '+57 3002554141';
  protected website = 'hhtps://missionrecycling.com/users';
  protected email = 'alguien@algo.com';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('PARAMETER::::',params);
      this.userName = params['id'] + ' Perez';
      this.profileURL = `https://robohash.org/${this.userName}`
    });
  }
}
