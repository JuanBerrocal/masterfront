import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { AboutPageComponent } from './componentes/about-page/about-page.component';

import { DashboardPageComponent } from './componentes/dashboard-page/dashboard-page.component';
import { GalleryPageComponent } from './componentes/gallery-page/gallery-page.component';
import { CrudPageComponent } from './componentes/crud-page/crud-page.component';
import { ProfilePageComponent } from './componentes/profile-page/profile-page.component';

const routes: Routes = [
  {path:'home', component: HomePageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'about', component: AboutPageComponent},
  {path:'dashboard', component: DashboardPageComponent},
  {path:'gallery', component: GalleryPageComponent},
  {path:'crud', component: CrudPageComponent},
  {path:'profile', component: ProfilePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
