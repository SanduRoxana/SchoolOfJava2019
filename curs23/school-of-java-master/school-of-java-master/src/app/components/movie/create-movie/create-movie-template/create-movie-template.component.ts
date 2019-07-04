import {Component, ViewChild} from '@angular/core';
import {Movie} from '../../../../model/movie.model';
import {FormArray, NgForm, NgModel} from '@angular/forms';
import {MovieService} from '../../../../services/movie.service';

@Component({
  selector: 'app-create-movie-template',
  templateUrl: 'create-movie-template.component.html',
  styleUrls: ['create-movie-template.component.css']
})
export class CreateMovieTemplateComponent {

  newMovie: Movie = {
    title: '',
    genre: '',
    id: null
  };
  @ViewChild('movieTitleFormControl')
  movieControl: NgModel;

  constructor(private movieService: MovieService) {


  }


  logForm(form) {
    console.log(form);
  }

  createMovie(movieForm: NgForm) {
    if (movieForm.valid) {
      this.movieService.createMovie(this.newMovie);
      movieForm.resetForm();
      movieForm.getControl(this.movieControl).patchValue('DEFAULT VALUE');
    } else {
      Object.values(movieForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
    }


  }
}
