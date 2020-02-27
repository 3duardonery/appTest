import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public updateProfileName(name: string, userId: number): boolean{

    let loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser)
    {
      loggedUser.name = name;
      localStorage.setItem('user', JSON.stringify(loggedUser));
      return true;
    } else {
      return false;
    }    
  }
}
