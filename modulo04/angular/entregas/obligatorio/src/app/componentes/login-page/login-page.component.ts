import { Component, Input, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import  {UserEntity } from 'src/app/model/UserEntity';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: UserEntity = {name: '', password: ''};
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  @Output() login() {
    if (this.authService.login(this.user)) {
      this.error = '';
      this.router.navigate(["/dashboard"]);
    }
    else {
      this.error = 'Usuario o password incorrectos.';
    }
}

  ngOnInit(): void {
  }

}
