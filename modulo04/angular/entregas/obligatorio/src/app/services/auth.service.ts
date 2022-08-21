import { Injectable } from '@angular/core';
import { UserEntity } from '../model/UserEntity'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserEntity;

  constructor() {
    let previousUser = localStorage.getItem('myUser');
    this.user = previousUser ? JSON.parse(previousUser) : {name: '', password: ''};
   }

  login(user: UserEntity): boolean {
    if ((user.name === "master@lemoncode.net") && (user.password === "12345678")) {
      this.user = {...user};
      localStorage.setItem('myUser', JSON.stringify(this.user));
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    this.user.name = '';
    this.user.password = '';
    localStorage.removeItem('myUser');
  }

  isLogged(): boolean {
    return this.user.name != '';
  }

  getUsername(): string {
    return this.user.name;
  }

}
