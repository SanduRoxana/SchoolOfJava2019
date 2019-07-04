import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';
import {Movie} from '../model/movie.model';
import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';
import {catchError, concatMap, tap} from 'rxjs/operators';

export interface MoviePayload {

  status: string;
  payload: Array<Movie>;

}

@Injectable()
export class MovieService {

  listOfMovies: Array<Movie> = [];
  listOfMoviesSubject: ReplaySubject<Array<Movie>> = new ReplaySubject(1);
  listOfMoviesSubject$ = this.listOfMoviesSubject.asObservable();

  serverUrl = 'http://localhost:8080/movies/';

  constructor(private loggerService: LoggerService, private httpClient: HttpClient) {
  }

  public loadAllMoviesWithSubject() {
    this.httpClient.get<Array<Movie>>(this.serverUrl)
      .subscribe(
        value => {
          this.listOfMovies = value;
          this.listOfMoviesSubject.next(this.listOfMovies);
        },
        error1 => {
          this.listOfMovies = [];
          this.listOfMoviesSubject.next(this.listOfMovies);
        });
  }

  public deleteMovie(movieId: number) {
    this.httpClient.delete(this.serverUrl + movieId)
      .pipe(
        tap(v => console.log(v)),
        concatMap(value => this.httpClient.get<Array<Movie>>(this.serverUrl)),
        tap(v => console.log(v)),
        catchError(err => {
          console.error('failed retrieving movies ');
          return [];
        })
      )
      .subscribe(value => {
        this.listOfMovies = value;
        this.listOfMoviesSubject.next(this.listOfMovies);
      });
  }


  createMovie(newMovie: Movie) {
    this.httpClient.post(this.serverUrl + 'addMovie', JSON.stringify(newMovie),
      {headers: {'Content-Type': 'application/json'}, responseType: 'text'})
      .pipe(
        concatMap(v => this.httpClient.get<Array<Movie>>(this.serverUrl)),
        catchError(err => {
          console.error('Could not deserialize whatever ');
          return [];
        })
      ).subscribe(value => {
      this.listOfMovies = value;
      this.listOfMoviesSubject.next(this.listOfMovies);
    });
  }
}
