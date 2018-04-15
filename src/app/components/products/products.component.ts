import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  selectedProduct: Product;

  onSelectProduct(product) {
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    const products = this.productService.getProducts();

    this.products = products;
  }
}
