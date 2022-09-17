import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.scss']
})
export class PublicMenuComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.auth.isLogged();
  }

}
