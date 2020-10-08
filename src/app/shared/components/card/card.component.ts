import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from '../../../models/people';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() people: IPeople;

  constructor() { }

  ngOnInit(): void {
  }

}
