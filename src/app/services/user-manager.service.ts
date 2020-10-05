import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  userData = new BehaviorSubject<IUser[]> ([]);

  constructor() { }

  getUserData(): IUser[]{
    return this.userData.getValue();
  }

  setUserData(user): void {
    this.userData.next([...this.userData.getValue(), user]);
  }
}
