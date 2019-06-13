import {Component, EventEmitter, Input, Output, OnInit, SimpleChanges} from '@angular/core'

@Component({
    selector: 'app-product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.css']
})
export class ProductCardComponent implements OnInit{

    @Input()
    productName: string;

    @Input()
    productDescription: string;

    @Output()
    productNameChanged: EventEmitter<string> = new EventEmitter();

    @Output()
    productDescriptionChanged: EventEmitter<string> = new EventEmitter();

    @Input()
    price: number;

    @Output()
    priceChange: EventEmitter<number> = new EventEmitter();

    resetValues(): void {
        const defaultValue = 'default value';
        this.productName = 'default value';
        this.productDescription = 'default value';
        this.productNameChanged.emit(defaultValue);
        this.productDescriptionChanged.emit(defaultValue);
        this.price=0;
        this.priceChange.emit(0);
    }

    ngOnInit(): void {
        console.log('From ngOInit in Product Card')
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        console.log('From ngOnChnages in Product Card')
    }
}