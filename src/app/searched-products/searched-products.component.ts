import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import ApiResponse from 'src/models/ApiResponse';
import Product from 'src/models/Product';

@Component({
  selector: 'searched-products',
  templateUrl: './searched-products.component.html',
  styleUrls: ['./searched-products.component.css']
})
export class SearchedProductsComponent implements OnInit {
  @Input()
  searchText: string;
  isSuccessSearch: boolean;
  products: Array<Product>;
  reasonPhrase: string;

  constructor(private route: ActivatedRoute, private location: Location) { 
    this.route.queryParams.subscribe(params => {
      this.searchText = this.route.snapshot.params.searchText;
    });
  }

  async ngOnInit(): Promise<void> {
    if(this.searchText == '') {
      this.isSuccessSearch = false;
      this.reasonPhrase = 'Nie podano frazy do wyszukania';
    }
    else {
      var response = await fetch('https://localhost:5001/api/search', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: this.searchText
      }).then(async res => { return <ApiResponse>await res.json(); });
      if(response.isSuccessStatusCode){
        this.isSuccessSearch = true;
        this.products = <Array<Product>>JSON.parse(response.content);
        this.products.forEach(product => product.ImagePath = `assets/images/products/${product.ImageName}`);
      }
      else {
        this.isSuccessSearch = false;
        this.reasonPhrase = response.reasonPhrase;
      }
    }
  }
}
