import { Component, OnInit, Input, } from '@angular/core';
import Category from 'src/models/Category';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  @Input() hasFetchError: boolean;
  @Input() fetchMessageResponse: string;
  @Input() categories: Array<Category>;

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedCategoryChanged(event): void {
    let categoryId = event.target.id;
    let previousSelection = document.getElementsByClassName('selectedCategory')[0];
    previousSelection.classList.remove('selectedCategory');
    previousSelection.classList.remove('bg-primary');
    previousSelection.classList.remove('text-white');
    let selectedCategory = document.getElementById(categoryId);
    selectedCategory.classList.add('selectedCategory');
    selectedCategory.classList.add('bg-primary');
    selectedCategory.classList.add('text-white');
  }
}
