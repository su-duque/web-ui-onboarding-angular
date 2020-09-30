import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lets-imagine',
  templateUrl: './lets-imagine.component.html',
  styleUrls: ['./lets-imagine.component.css']
})
export class LetsImagineComponent implements OnInit {
  nameAdded = '';

  constructor() { }

  ngOnInit(): void {
    this.nameAdded = history.state.name;
  }

}
