import { Injectable } from '@angular/core';
import { UserAuth } from '../models/user-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: UserAuth[] = [];

  constructor() {
    this.users.push({email: 'email@email.com', password: '123456'});
  }

  login(user: UserAuth): boolean {
    let userLogin = this.users.find(x => x.email === user.email && x.password === user.password);
    if(userLogin) {
      return true;
    } else {
      return false;
    }
  }
}
