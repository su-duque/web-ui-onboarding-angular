import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @Output() nameAdded = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addName(name, event): void {
    event.preventDefault();
    this.nameAdded = name.value;
    console.log('name saved', this.nameAdded);
    name.value = '';

    this.router.navigate(
      ['lets-imagine'], 
      {state: {name: this.nameAdded}});
  }
}
