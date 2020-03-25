import { Component, OnInit } from '@angular/core';
import Product from 'src/models/Product';
import Category from 'src/models/Category';
import ApiResponse from 'src/models/ApiResponse';

@Component({
  selector: 'products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  isLoading: boolean;
  products: Array<Product>;
  hasProductsFetchError: boolean;
  productsFetchErrorMessage: string;
  categories: Array<Category>;
  hasCategoriesFetchError: boolean;
  categoriesFetchErrorMessage: string;
  
  constructor() { }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    await this.getProducts();
    await this.getCategories();
    this.isLoading = false;
  }

  async getProducts(): Promise<void> {
    try {
      let response = await fetch('https://localhost:5001/api/product/getProducts').then(async res => { return <ApiResponse>await res.json(); });
      if(response.isSuccessStatusCode) {
        let products = await <Array<Product>>JSON.parse(response.content);
        products.forEach(product => product.ImagePath = `assets/images/products/${product.ImageName}`);
        this.products = products;
        this.hasProductsFetchError = false;
      }
      else {
        this.productsFetchErrorMessage = `code: ${response.statusCode}, ${response.reasonPhrase}`;
        this.hasProductsFetchError = true;
      }
    }
    catch {
      this.hasProductsFetchError = true;
    }
  }

  async getCategories(): Promise<void> {
    try{
      let response = await fetch('https://localhost:5001/api/category/getCategories').then(async res => { return <Promise<ApiResponse>>await res.json(); });
      if(response.isSuccessStatusCode) {
        let data = <Array<Category>>JSON.parse(response.content);
        this.hasCategoriesFetchError = false;
        this.categories = data;
      }
      else {
        this.categoriesFetchErrorMessage = `code: ${response.statusCode}, ${response.reasonPhrase}`;
        this.hasCategoriesFetchError = true;
      }
    }
    catch{
      this.hasCategoriesFetchError = true;
    }
  }
}
