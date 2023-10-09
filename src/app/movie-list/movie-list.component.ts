import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.interface';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent {
  movies: Movie[] = [];
  constructor(private movieService: MovieService, private authService:AuthService) {}
  
  userLoginInfo = this.authService.userLoginInfo;
  
  // when this component loads -> fetch the movies
  ngOnInit(): void {
    this.loadMovies();
  }
  
  // fetch all the available movies
  loadMovies(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
  
}

