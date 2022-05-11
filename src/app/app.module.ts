import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterSuccessComponent} from './auth/register-success/register-success.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from "ngx-webstorage";
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {EditorModule} from "@tinymce/tinymce-angular";
import {HttpClientInterceptor} from "./http-client-interceptor";
import {PostComponent} from './post/post.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SideBarComponent } from './side-bar/side-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CarsComponent } from './cars/cars.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { SportsComponent } from './sports/sports.component';
import { AnimesComponent } from './animes/animes.component';
import { MusicsComponent } from './musics/musics.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    HomeComponent,
    AddPostComponent,
    PostComponent,
    SideBarComponent,
    AboutMeComponent,
    CarsComponent,
    VideoGamesComponent,
    SportsComponent,
    AnimesComponent,
    MusicsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    NgxWebstorageModule.forRoot(), //this is used for localstorage service
    FontAwesomeModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
