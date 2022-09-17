import { Injectable } from '@angular/core';
import { UserEntity } from '../model/UserEntity'
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserEntity;

  constructor() {
    let previousUser = localStorage.getItem('myUser');
    this.user = previousUser ? JSON.parse(previousUser) : {name: '', password: ''};

   }

  login(username: string, password: string): Observable<boolean> {
    if ((username === "master@lemoncode.net") && (password === "12345678")) {
      this.user.name = username;
      this.user.password = password;
      localStorage.setItem('myUser', JSON.stringify(this.user));
      return of(true).pipe(delay(2000));
    }
    else {
      return of(false).pipe(delay(2000));
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
