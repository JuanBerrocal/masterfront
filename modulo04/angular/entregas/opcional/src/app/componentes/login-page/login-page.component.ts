import { Component, Input, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import  {UserEntity } from 'src/app/model/UserEntity';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: UserEntity = {name: '', password: ''};
  error: string = '';
  icon: string = 'assets/loading.gif';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  @Output() login() {
    this.loading = true;
    const granted$: Observable<boolean> = this.authService.login(this.user.name, this.user.password);
    granted$.subscribe((x: boolean) => {
     if (x) {
      this.error = '';
      this.router.navigate(["/dashboard"]);
      }
    else {
      this.error = 'Usuario o password incorrectos.';
      }
    this.loading = false;
    });

}

  ngOnInit(): void {
  }

}
