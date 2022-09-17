import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getUsername(): string {
    return this.auth.getUsername();
  }

  isLogged(): boolean {
    return this.auth.isLogged();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/home"]);
  }

}
