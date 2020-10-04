import { Product } from './product';

export class ProductData {

  static products: Product[] = [
    {
      id: 1,
      name: 'Leaf Rake',
      description: 'Leaf rake with 48-inch wooden handle',
      price: 19.95,
      imageFileName: 'ok'
    },
    {
      id: 2,
      name: 'Garden Cart',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      imageFileName: 'ok'
    },
    {
      id: 5,
      name: 'Hammer',
      description: 'Curved claw steel hammer',
      price: 8.9,
      imageFileName: 'ok'
    },
    {
      id: 8,
      name: 'Saw',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      imageFileName: 'ok'
    },
    {
      id: 10,
      name: 'Video Game Controller',
      description: 'Standard two-button video game controller',
      price: 35.95,
      imageFileName: 'ok'
    }
  ];
}