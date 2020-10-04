import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProductData } from './products/product-data';
import { Product } from './products/product';

export class AppData implements InMemoryDbService {

  createDb(): { products: Product[] } {
    const products = ProductData.products;
    return { products };
  }
}