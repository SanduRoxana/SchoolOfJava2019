import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {LoggerService} from '../../services/logger.service';
import {Movie} from '../../model/movie.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
  allMovies$: Observable<Array<Movie>>;

  constructor(private movieService: MovieService, private loggerService: LoggerService) {
  }

  ngOnInit(): void {
    this.allMovies$ = this.movieService.listOfMoviesSubject$;
  }

  loadMovies() {
    this.movieService.loadAllMoviesWithSubject();
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id);
  }

}
