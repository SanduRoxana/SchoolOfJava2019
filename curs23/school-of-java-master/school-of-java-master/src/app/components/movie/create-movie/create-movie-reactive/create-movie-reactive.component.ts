import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {MovieService} from '../../../../services/movie.service';
import {Movie} from '../../../../model/movie.model';


@Component({
  selector: 'app-create-movie-reactive',
  templateUrl: 'create-movie-reactive.component.html',
  styleUrls: ['create-movie-reactive.component.css']
})
export class CreateMovieReactiveComponent {

  movieForm: FormGroup;

  constructor(private movieService: MovieService) {
    this.movieForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      genre: new FormControl('', [Validators.required, Validators.minLength(3)])
    }, [formValidator()]);
  }


  createMovie() {
    console.log(this.movieForm);
    if (this.movieForm.valid) {
      const movie: Movie = {
        id: null,
        title: this.movieForm.get('name').value,
        genre: this.movieForm.get('genre').value
      };
      this.movieService.createMovie(movie);
    }

  }
}

export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.parent && control.parent.get('genre')) {
      const genreValue = control.parent.get('genre').value;
      const movieName = control.value;
      return movieName === genreValue ? {customError: true} : null;
    }
    return null;
  };
}


export function formValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log(control);
    if (control && control.get('name') && control.get('genre')) {
      const nameControl = control.get('name');
      const nameValue = nameControl.value;
      const genreValue = control.get('genre').value;
      if (nameValue === genreValue) {
        nameControl.setErrors({forbiddenFormValue: true});
      } else {
        nameControl.setErrors(null);
      }
      return nameValue === genreValue ? {forbiddenFormValue: true} : null;
    } else {
      return null;
    }
  };
}
