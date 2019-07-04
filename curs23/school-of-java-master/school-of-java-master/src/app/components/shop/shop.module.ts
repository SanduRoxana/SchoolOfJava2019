import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { ShopComponent } from './shop.component';
import { ProductCardReferenceComponent } from '../product-card-reference/product-card-reference.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShopRoutingModule } from './shop.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopDetailsComponent } from './components/shop-details/shop-details.components';
import { ShopPromotionsComponent } from './components/shop-promotions/shop-promotions.components';

@NgModule(
    {
        imports: [CommonModule, FlexLayoutModule, MatButtonModule, ShopRoutingModule, SharedModule, ShopDetailsComponent, ShopPromotionsComponent],
        exports: [],
        declarations: [ShopComponent, ProductCardReferenceComponent]
    }
)
export class ShopModule {



}