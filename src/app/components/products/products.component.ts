import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
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

  constructor() { }

  selectedProduct: Product;

  onSelectProduct(product) {
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.selectedProduct = this.products[0];
  }

}
