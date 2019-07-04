import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

@NgModule ({
    declarations: [HomeComponent],
    imports: [CommonModule, FlexLayoutModule,MatButtonModule],
    exports: [HomeComponent]
})
export class SharedModule {

}