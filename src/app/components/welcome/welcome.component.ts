import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  nameAdded = '';
  constructor() {}

  ngOnInit(): void {}

  addName(name, event): void {
    event.preventDefault();
    console.log('name typped', name.value);
    name.value = '';
  }
}
