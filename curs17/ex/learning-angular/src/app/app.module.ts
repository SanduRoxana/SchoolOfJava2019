import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ShopComponent } from './components/shop/shop.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardReferenceComponent } from './components/poduct-card-reference/product-card-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductCardComponent,
    ProductCardReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
