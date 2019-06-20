import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Movie } from '../model/movie.model';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

    listofMovis: Array<Movie> =[];
    listOfMovisSybject: ReplaySubject<Array<Movie>> = new ReplaySubject(1);
    listOfMovisSybject$ = this.listOfMovisSybject.asObservable();

    serverUrl = 'http://localhost:8080/movies/'


    constructor(private loggerService: LoggerService, private httpClient: HttpClient) {

    }

    public loadAllMoviesWithSubject() {
        this.httpClient.get<Array<Movie>>(this.serverUrl).subscribe(
            value => {
                this.listofMovis = value;
                this.listOfMovisSybject.next(this.listofMovis);
            },
            error1 => {
                this.listofMovis = [];
                this.listOfMovisSybject.next(this.listofMovis);
            },
            () => {
            });
    }

    public createMovie(movie: Movie) {
        this.httpClient.post('URL', JSON.stringify(movie), {
            responseType: 'text',
            headers: {'content-type': 'application/json'}
        }).subscribe(
            value => {
                this.loadAllMoviesWithSubject();
            });
    }

    public loadAllMovies(): Observable<Array<Movie>> {
        this.loggerService.logMessage('Loading all movies...');
        return this.httpClient.get<Array<Movie>>(this.serverUrl);
    }

    public removeMovie() {
        this.loggerService.logMessage('Removing movie...');
    }

    public createMovie(naem: string, genre: string) {
        this.loggerService.logMessage('Creating movies...');
    }
}