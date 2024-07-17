import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { api } from '../constants/constants'


// Datos simulados para pruebas
const MOCK_USERS: Array<IUser> = [
  {
    _id: 1,
    name: 'Juan',
    surname: 'Pérez',
    flag: 'co',
    company: 'Plastics SAS',
    workPosition: 'CEO Plastics SAS',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals', 'paper', 'plastic', 'special-alloys', 'stainless-steel', 'textile', 'tyres-rubber'],
    country: 'colombia'
  },
  {
    _id: 2,
    name: 'Ana',
    surname: 'Gómez',
    flag: 'it',
    company: 'Recycling ORG',
    workPosition: 'Sales',
    profileURL: '../../../assets/images/ph6.jpg',
    categories: ['paper', 'plastic', 'especial-alloys', 'textile'],
    country: 'italy'
  },
  {
    _id: 3,
    name: 'Juana',
    surname: 'Guerrero',
    flag: 'au',
    company: 'Customers SAS',
    workPosition: 'Marketing',
    profileURL: '../../../assets/images/ph3.jpg',
    categories: ['stainless-steel', 'tyres-rubber', 'especial-alloys', 'textile'],
    country: 'austria',
  },
  {
    _id: 1,
    name: 'Juan',
    surname: 'Pérez',
    flag: 'co',
    company: 'RamosCorp',

    workPosition: 'Desarrollador',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals'],
    country: 'colombia'
  },
  {
    _id: 1,
    name: 'Juan',
    surname: 'Pérez',
    flag: 'co',
    company: 'Plastics SAS',
    workPosition: 'CEO Plastics SAS',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals'],
    country: 'colombia'
  },
  {
    _id: 2,
    name: 'Ana',
    surname: 'Gómez',
    flag: 'it',
    company: 'Recycling ORG',
    workPosition: 'Sales',
    profileURL: '../../../assets/images/ph6.jpg',
    categories: ['paper', 'plastic', 'especial-alloys', 'textile'],
    country: 'italy'
  },
  {
    _id: 3,
    name: 'Juana',
    surname: 'Guerrero',
    flag: 'au',
    company: 'Customers SAS',
    workPosition: 'Marketing',
    profileURL: '../../../assets/images/ph3.jpg',
    categories: ['stainless-steel', 'tyres-rubber', 'especial-alloys', 'textile'],
    country: 'austria',
  },
  {
    _id: 1,
    name: 'Juan',
    surname: 'Pérez',
    flag: 'co',
    company: 'RamosCorp',

    workPosition: 'Desarrollador',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals'],
    country: 'colombia'
  },
  {
    _id: 1,
    name: 'Juan',
    surname: 'Pérez',
    flag: 'co',
    company: 'Plastics SAS',
    workPosition: 'CEO Plastics SAS',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals'],
    country: 'colombia'
  },
  {
    _id: 2,
    name: 'Ana',
    surname: 'Gómez',
    flag: 'it',
    company: 'Recycling ORG',
    workPosition: 'Sales',
    profileURL: '../../../assets/images/ph6.jpg',
    categories: ['paper', 'plastic', 'especial-alloys', 'textile'],
    country: 'italy'
  },
  {
    _id: 3,
    name: 'Juana',
    surname: 'Guerrero',
    flag: 'au',
    company: 'Customers SAS',
    workPosition: 'Marketing',
    profileURL: '../../../assets/images/ph3.jpg',
    categories: ['stainless-steel', 'tyres-rubber', 'especial-alloys', 'textile'],
    country: 'austria',
  },
  {
    _id: 1,
    name: 'Juan',
    surname: 'Pérez',
    flag: 'co',
    company: 'RamosCorp',
    workPosition: 'Desarrollador',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals'],
    country: 'colombia'
  },
  {
    _id: 1,
    name: 'Juan',
    surname: 'Pérez',
    flag: 'co',
    company: 'Plastics SAS',
    workPosition: 'CEO Plastics SAS',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals'],
    country: 'colombia'
  },
  {
    _id: 2,
    name: 'Ana',
    surname: 'Gómez',
    flag: 'it',
    company: 'Recycling ORG',
    workPosition: 'Sales',
    profileURL: '../../../assets/images/ph6.jpg',
    categories: ['paper', 'plastic', 'especial-alloys', 'textile'],
    country: 'italy'
  },
  {
    _id: 3,
    name: 'Juana',
    surname: 'Guerrero',
    flag: 'au',
    company: 'Customers SAS',
    workPosition: 'Marketing',
    profileURL: '../../../assets/images/ph3.jpg',
    categories: ['stainless-steel', 'tyres-rubber', 'especial-alloys', 'textile'],
    country: 'austria',
  },
  {
    _id: 1,
    name: 'Dario',
    surname: 'Pérez',
    flag: 'co',
    company: 'RamosCorp',
    workPosition: 'Desarrollador',
    profileURL: '../../../assets/images/ph1.jpg',
    categories: ['electrics-electronics', 'ferrous-metals', 'non-ferrous-metals'],
    country: 'colombia'
  },

];

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  public users: BehaviorSubject<Array<IUser>> = new BehaviorSubject<Array<IUser>>([]);

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  loadUsers() {
    setTimeout(() => this.users.next(MOCK_USERS), 1000);

    // Si quieres usar la petición real, comenta la línea anterior y descomenta la siguiente:
    // this.http.get<Array<IUser>>(`${API_URL}/usuarios`).subscribe(
    //   users => this.users.next(users),
    //   error => console.error('Error al recuperar usuarios', error)
    // );
  }

  getUsers(): BehaviorSubject<Array<IUser>> {
    return this.users;
  }
}
