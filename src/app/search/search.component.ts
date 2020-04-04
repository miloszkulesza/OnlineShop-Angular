import { Component, OnInit } from '@angular/core';
import ApiResponse from 'src/models/ApiResponse';
import Product from 'src/models/Product';
import {Router} from "@angular/router";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(e): Promise<void> {
    e.preventDefault();
    this.router.navigate(['/searchProducts', this.searchText]);
    this.searchText = '';
  }

  searchTextChanged(e): void {
    this.searchText = e.target.value;
  }
}
