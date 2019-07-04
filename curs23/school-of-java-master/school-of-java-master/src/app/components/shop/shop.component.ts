import {Component, OnInit} from '@angular/core';
import {Product} from '../product-card-reference/product.model';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css']
})
export class ShopComponent implements OnInit {


  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {


    activatedRoute.queryParamMap.subscribe(value => {
      console.log('Query Param');
      console.log(value);
    });

    activatedRoute.paramMap.subscribe(value => {
      console.log('Param Map ');
      console.log(value);
    });


  }

  listOfProducts: Array<Product> = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.listOfProducts = [
        {name: 'Product 1', description: 'Short description Product 1', price: 100},
        {name: 'Product 2', description: 'Short description Product 2', price: 200},
        {name: 'Product 3', description: 'Short description Product 3', price: 300},
        {name: 'Product 4', description: 'Short description Product 4', price: 400},
      ];

    }, 500);
  }

}
