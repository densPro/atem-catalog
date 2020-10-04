import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'atem-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnChanges {
  @Input() product: Product;
  imagePath: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.imagePath = `assets/products-photos/${ this.product.imageFileName }`;
  }
}
