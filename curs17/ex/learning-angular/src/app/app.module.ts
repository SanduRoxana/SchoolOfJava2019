import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule, MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ShopComponent } from './components/shop/shop.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardReferenceComponent } from './components/poduct-card-reference/product-card-reference.component';
import { appHoverDirective } from './directives/app-hover.directive';
import { MovieService } from './services/movie.service';
import { LoggerService } from './services/logger.service';
import { MovieComponent } from './components/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductCardComponent,
    ProductCardReferenceComponent,
    appHoverDirective,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    MovieService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
