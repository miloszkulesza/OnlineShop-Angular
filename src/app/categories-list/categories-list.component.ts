import { Component, OnInit, Input } from '@angular/core';
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
}
