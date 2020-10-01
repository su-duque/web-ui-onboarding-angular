import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  nameAdded = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addName(name, event): void {
    event.preventDefault();
    this.nameAdded = name.value;
    console.log('name saved', this.nameAdded);
    name.value = '';

    const hasNumber = /\d/;
    const hasEspecialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (this.nameAdded !== '') {
      if (
        hasNumber.test(this.nameAdded) ||
        hasEspecialCharacter.test(this.nameAdded)
      ) {
        window.alert('You have to write a real name');
      } else {
        this.router.navigate(['lets-imagine'], {
          state: { name: this.nameAdded },
        });
      }
    } else {
      window.alert('You have to write a name first');
    }
  }
}
