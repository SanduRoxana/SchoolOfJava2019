import {Component} from '@angular/core';
import {Movie} from '../../../../model/movie.model';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-create-movie-template',
  templateUrl: 'create-movie-template.component.html',
  styleUrls: ['create-movie-template.component.css']
})
export class CreateMovieTemplateComponent {

  newMovie: Movie = {
    title: '',
    genre: '',
    id: 0
  };

  constructor(private movieService: MovieService){

  }

  logForm(form) {
    console.log(form);
  }

createMovie(movieForm: NgForm){
  if(movieForm.valid){
    this.movieService.createMovie(this.newMovie);
  } else {
    Object.values(movieForm.controls).forEach(control => control.markAsDirty();)
  }
}
}
