import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../../services/user-manager.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-lets-imagine',
  templateUrl: './lets-imagine.component.html',
  styleUrls: ['./lets-imagine.component.css']
})
export class LetsImagineComponent implements OnInit {
  userAdded: Array<IUser> = [];

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {
    this.userAdded = this.userManagerService.getUserData();
  }

}
