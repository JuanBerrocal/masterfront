import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHeaderComponent } from './componentes/public-header/public-header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { AboutPageComponent } from './componentes/about-page/about-page.component';
import { PublicMenuComponent } from './componentes/public-menu/public-menu.component';
import { PrivateMenuComponent } from './componentes/private-menu/private-menu.component';
import { DashboardPageComponent } from './componentes/dashboard-page/dashboard-page.component';
import { GalleryPageComponent } from './componentes/gallery-page/gallery-page.component';
import { CrudPageComponent } from './componentes/crud-page/crud-page.component';
import { ProfilePageComponent } from './componentes/profile-page/profile-page.component';
import { GalleryImageComponent } from './componentes/gallery-image/gallery-image.component';
import { GalleryButtonsComponent } from './componentes/gallery-buttons/gallery-buttons.component';
import { GalleryListComponent } from './componentes/gallery-list/gallery-list.component';
import { RotateDirective } from './directives/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    AboutPageComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    DashboardPageComponent,
    GalleryPageComponent,
    CrudPageComponent,
    ProfilePageComponent,
    GalleryImageComponent,
    GalleryButtonsComponent,
    GalleryListComponent,
    RotateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
