import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './components/shop-details/shop-details.components';
import { ShopPromotionsComponent } from './components/shop-promotions/shop-promotions.components';

const shopRoutes: Routes = [
    {
        component: ShopComponent,
        path: '',
        children: [{
            path: '',
            component: ShopDetailsComponent
        }, {
            path: 'promotions',
            component: ShopPromotionsComponent     
        }, {
            path: 'details',
            component: ShopDetailsComponent
        }]
    }];

@NgModule(
    {
        imports: [CommonModule, RouterModule.forChild(shopRoutes)],
        exports: [RouterModule]
    }
)
export class ShopRoutingModule {

}

