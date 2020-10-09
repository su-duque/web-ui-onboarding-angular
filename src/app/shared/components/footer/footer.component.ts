import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() previousPath: string;
  @Input() nextPath: string;
  @Input() isNextVisible: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changePath(path: string): void {
    this.router.navigate([path]);
  }
}
