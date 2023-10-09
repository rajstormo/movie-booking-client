
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './auth/user/user-login/user-login.component';
import { UserRegisterComponent } from './auth/user/user-register/user-register.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MovieShowTimeComponent} from './movie-show-time/movie-show-time.component'
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'login', component:UserLoginComponent},
  {path: 'register', component:UserRegisterComponent},
  {path: 'movies', component:MovieListComponent},
  {path: 'movie/:id', component:MovieComponent},
  {path: 'showtimes', component:MovieShowTimeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
