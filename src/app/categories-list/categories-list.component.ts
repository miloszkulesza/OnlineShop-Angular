import { Component, OnInit } from '@angular/core';
import Category from '../../models/Category';
import ApiResponse from '../../models/ApiResponse';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories: Array<Category>;
  fetchError: string;
  hasFetchError: boolean;
  fetchMessageResponse: string;

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.getCategories();
  }

  async getCategories(): Promise<void> {
    try{
      let response = await fetch('https://localhost:5001/api/category/getCategories').then(async res => { return <Promise<ApiResponse>>await res.json(); });
      if(response.isSuccessStatusCode) {
        let data = <Array<Category>>JSON.parse(response.content);
        this.hasFetchError = false;
        this.categories = data;
      }
      else {
        this.fetchMessageResponse = `code: ${response.statusCode}, ${response.reasonPhrase}`;
        this.hasFetchError = true;
      }
    }
    catch{
      this.fetchError = "Nie udało się pobrać kategorii";
      this.hasFetchError = true;
    }
  }
}
