import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './home-page/home-page.component';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { MenuNavbarComponent } from './shared/menu-navbar/menu-navbar.component';
import { BookshopComponent } from './book/bookshop/bookshop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    TopNavbarComponent,
    MenuNavbarComponent,
    BookshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
