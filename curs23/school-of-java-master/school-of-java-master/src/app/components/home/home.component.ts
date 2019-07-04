import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {

  }


  navigateToShop() {
    this.router.navigateByUrl('/shop');

    this.router.navigate(['/shop'], {queryParams: {value: 22}});

  }

  navigateToMovies() {
    this.router.navigateByUrl('/movie');
  }
}
