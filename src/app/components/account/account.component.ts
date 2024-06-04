import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {

  protected ahora = new Date();
  protected name = 'Daniel Ramos';
  protected countryFlag = 'it';
  protected categories : string[] = ["plastic","stainless-steel", "paper","non-ferrous-metals"]
  protected profileURL: string = 'https://robohash.org/alberto';
  protected company = 'Company'
  protected workPosition = 'Work Position'
  protected mobile = '+57 3002554141';
  protected website = 'hhtps://missionrecycling.com/users';
  protected email = 'alguien@algo.com';
  protected aboutInfo =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci qui tenetur dolores quam vero! Ipsum, porro dolore vel iusto, facilis pariatur doloremque, quaerat ut repellat molestiae incidunt commodi nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat id debitis dicta doloremque. Sequi distinctio exercitationem sit illum obcaecati totam alias esse. Id ratione omnis vitae dolorem minus nulla!';
}
