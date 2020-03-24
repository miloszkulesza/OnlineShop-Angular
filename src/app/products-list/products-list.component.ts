import { Component, OnInit } from '@angular/core';
import ApiResponse from 'src/models/ApiResponse';
import Product from 'src/models/Product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Array<Product>;
  hasFetchError: boolean;
  fetchMessageResponse: string;

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.getProducts();
  }

  async getProducts(): Promise<void> {
    try {
      let response = await fetch('https://localhost:5001/api/product/getProducts').then(async res => { return <ApiResponse>await res.json(); });
      if(response.isSuccessStatusCode) {
        let products = await <Array<Product>>JSON.parse(response.content);
        products.forEach(product => product.ImagePath = `assets/images/products/${product.ImageName}`);
        this.products = products;
        this.hasFetchError = false;
      }
      else {
        this.fetchMessageResponse = `code: ${response.statusCode}, ${response.reasonPhrase}`;
        this.hasFetchError = true;
      }
    }
    catch {
      this.hasFetchError = true;
    }
  }
}
