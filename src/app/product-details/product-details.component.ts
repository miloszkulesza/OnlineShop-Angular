import { Component, OnInit } from '@angular/core';
import Product from 'src/models/Product';
import ApiResponse from 'src/models/ApiResponse';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: Product;
  hasFetchError: boolean;
  fetchMessageResponse: string;
  productId: string;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.route.queryParams.subscribe(params => {
      this.productId = this.route.snapshot.params.productId;
    });
   }

  async ngOnInit(): Promise<void> {
    await this.getProduct(this.productId);
  }

  async getProduct(productId: string): Promise<void> {
    try {
      let response = await fetch(`https://localhost:5001/api/product/getProduct?productId=${productId}`).then(async res => { return <ApiResponse>await res.json(); })
      if(response.isSuccessStatusCode) {
        this.product = <Product>JSON.parse(response.content);
        this.product.ImagePath = `assets/images/products/${this.product.ImageName}`
        this.hasFetchError = false;
        console.log(this.product);
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

  goBack(): void {
    this.location.back();
  }
}
