import {Component, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core'
import { Product } from './product.model';

@Component({
    selector: 'app-product-card-reference',
    templateUrl: 'product-card-reference.component.html',
    styleUrls: ['product-card-reference.component.css']
})
export class ProductCardReferenceComponent implements OnChanges {

    @Input()
    product: Product;

    incrementPrice() {
        this.product.price = this.product.price + 1;
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        console.log('From card reference')
    }
}