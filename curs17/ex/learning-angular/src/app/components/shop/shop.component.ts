import {Component, OnInit} from '@angular/core'
import { Product } from '../poduct-card-reference/product.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-shop',
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.css']
})
export class ShopComponent implements OnInit{

    /*product1Name = 'Product 1 Name';
    product2Name = 'Product 2 Name';
    product1Description = 'Product 1 Description';
    product2Description = 'Product 2 Description';
    price1 = 300;

    mockProduct: Product = {
        price: 100,
        description: "Mock description",
        name: "Mock name"
    };

    handleProduct1DescriptionChanged(updatedProductDescription: string) {
        this.product1Description = updatedProductDescription;
    }

    handleProduct1NameChanged(updateProductName: string) {
        this.product1Name = updateProductName;
    }

    handleProduct2DescriptionChanged(updatedProductDescription: string) {
        this.product2Description = updatedProductDescription;
    }

    handleProduct2NameChanged(updateProductName: string) {
        this.product2Name = updateProductName;
    }

    decreaseProductPrice(): void {
        this.mockProduct.price -= 1;
    }

    ngOnInit(): void {
        console.log('On Init!');
    }*/

    listOfProducts: Array<Product> = [];

    ngOnInit(): void {
        setTimeout(() => {
            this.listOfProducts = [
                {name:'Product 1', description: 'Short description product 1', price: 100},
                {name:'Product 2', description: 'Short description product 2', price: 200},
                {name:'Product 3', description: 'Short description product 3', price: 300},
                {name:'Product 4', description: 'Short description product 4', price: 400},
            ];
        }, 500);
    }
    
    constructor(private movieService: MovieService) {
        
    }
}