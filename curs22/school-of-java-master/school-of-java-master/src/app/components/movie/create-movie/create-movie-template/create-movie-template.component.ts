import {Component} from '@angular/core';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-create-movie-template',
  templateUrl: 'create-movie-template.component.html',
  styleUrls: ['create-movie-template.component.css']
})
export class CreateMovieTemplateComponent {
  newMovie: Movie = {
    genre: '',
    id: 0,
    title: ''
  };

  logForm(form) {
    console.log(form);
  }
}