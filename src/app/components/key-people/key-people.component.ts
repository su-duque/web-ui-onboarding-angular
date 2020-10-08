import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/models/people';

@Component({
  selector: 'app-key-people',
  templateUrl: './key-people.component.html',
  styleUrls: ['./key-people.component.css']
})
export class KeyPeopleComponent implements OnInit {
  KeyPeople: Array<IPeople> = [];

  constructor() { }

  ngOnInit(): void {
    this.KeyPeople = [{
      peopleImage: '/assets/images/people/Damian_Lazzarano.png',
      peopleName: 'Damian Lazzarano',
      slack: '@damian.lazzarano',
      email: 'damian.lazzarano@globant.com',
      charge: 'SP & UI STUDIO PARTNER',
    },
    {
      peopleImage: '/assets/images/people/David_Correa.png',
      peopleName: 'David Correa',
      slack: '@david.correa',
      email: 'david.correa@globant.com',
      charge: 'SP & UI STUDIO PARTNER'
    },
    {
      peopleImage: '/assets/images/people/Luciana_Zavaleta.png',
      peopleName: 'Luciana Zavaleta',
      slack: '@luciana.zavaleta',
      email: 'luciana.zavaleta@globant.com',
      charge: 'UI ENGINEERING PARTNER'
    }, {
      peopleImage: '/assets/images/people/Gabriel_Martinez.png',
      peopleName: 'Gabriel Martinez',
      slack: '@gabriel.martinez',
      email: 'gabriel.martinez@globant.com',
      charge: 'UI TDC FOCAL THECH. DIRECTOR'
    }, {
      peopleImage: '/assets/images/people/Sebastian_Gomez.png',
      peopleName: 'Sebastian Gomez',
      slack: '@s.gomez',
      email: 's.gomez@globant.com',
      charge: 'UI ENGINEERING TECH. MANAGER'
    }];
  }

}
