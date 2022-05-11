import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterSuccessComponent} from "./auth/register-success/register-success.component";
import {HomeComponent} from "./home/home.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {PostComponent} from "./post/post.component";
import {AuthGuard} from "./auth.guard";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SportsComponent} from "./sports/sports.component";
import {CarsComponent} from "./cars/cars.component";
import {VideoGamesComponent} from "./video-games/video-games.component";
import {AnimesComponent} from "./animes/animes.component";
import {MusicsComponent} from "./musics/musics.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register-success', component: RegisterSuccessComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'games', component: VideoGamesComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'animes', component: AnimesComponent},
  {path: 'musics', component: MusicsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'post/:id', component: PostComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
