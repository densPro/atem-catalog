/* Defines the product entity */
export interface Product {
  id: number;
  name: string;
  description?: string;
  price?: number;
  imageFileName: string;
}