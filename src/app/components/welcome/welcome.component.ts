import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerService } from '../../services/user-manager.service';
import { IUser } from '../../models/user';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  nameAdded = '';

  constructor(
    private router: Router,
    private userManagerService: UserManagerService
  ) {}

  ngOnInit(): void {}

  addName(name, event): void {
    event.preventDefault();
    const newUser: IUser = {
      name: name.value,
    };
    name.value = '';

    const hasNumber = /\d/;
    const hasEspecialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (newUser.name !== '') {
      if (
        hasNumber.test(newUser.name) ||
        hasEspecialCharacter.test(newUser.name)
      ) {
        window.alert('You have to write a real name');
      } else {
        this.router.navigate(['lets-imagine']);
        this.userManagerService.setUserData(newUser);
      }
    } else {
      window.alert('You have to write a name first');
    }
  }
}
