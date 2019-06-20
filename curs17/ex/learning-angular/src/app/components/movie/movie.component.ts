import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Movie } from 'src/app/model/movie.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-movie',
    templateUrl: 'movie.component.html',
    styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {

    loggerCount: number;

    allMovies: Array<Movie> = [];

    allMoviesLoadedWithSubject$: Observable<Array<Movie>>;
    allMoviesLoadedWithSubjectWithoutObservable: Array<Movie>;

    constructor(private movieService: MovieService, private loggerService: LoggerService) {
        loggerService.loggedMessagesSubjectStream$.subscribe(
            value => {
                this.loggerCount = value;
            });
    }

    ngOnInit(): void {
        this.allMoviesLoadedWithSubject$ = this.movieService.listOfMovisSybject$;

        this.movieService.listOfMovisSybject$.subscribe(
            value => {
                this.allMoviesLoadedWithSubjectWithoutObservable = value;
            });
    }

    loadMovies() {
        this.movieService.loadAllMovies().subscribe(
            value => {
                this.allMovies = value;
            },
            error1 => {
                console.error('could not load movies');
            },
            () => {
                console.log('subsciption finished');
            }
        );
    }

    refreshCount() {
        this.loggerService.reserLoggedMessages();
    }

    loadMoviesWithSubject() {
        this.movieService.loadAllMoviesWithSubject();
    }

}