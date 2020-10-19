import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserManagerService } from '../../services/user-manager.service';

@Component({
  selector: 'app-triforce',
  templateUrl: './triforce.component.html',
  styleUrls: ['./triforce.component.css']
})
export class TriforceComponent implements OnInit {
  userAdded: IUser;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {
    this.userAdded = this.userManagerService.getUserData();
  }

}
