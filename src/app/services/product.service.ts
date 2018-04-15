import { Injectable } from '@angular/core';
import { Product } from '../class/product';

const products = [
  {
    id: 1,
    name: 'iPhone',
    price: 650
  },
  {
    id: 2,
    name: 'WinsPhone',
    price: 850
  },
  {
    id: 3,
    name: 'Samsung',
    price: 450
  },
  {
    id: 4,
    name: 'iphone10',
    price: 850
  }
]


@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return products;
  }

}
