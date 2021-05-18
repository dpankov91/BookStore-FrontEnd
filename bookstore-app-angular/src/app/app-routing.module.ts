import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {BookshopComponent} from "./book/bookshop/bookshop.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', component: LoginPageComponent},
  {path: 'bookshop', component: BookshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
