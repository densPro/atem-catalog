import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppData } from './app-data';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailModalComponent } from './products/product-detail-modal/product-detail-modal.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/product.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductDetailModalComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    NgbModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
