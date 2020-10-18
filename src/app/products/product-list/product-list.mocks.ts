import { of } from 'rxjs';
import { Product } from '../product';

export class ProductServiceMock {
  products$  = of([{} as Product]);
}
