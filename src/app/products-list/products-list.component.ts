import { Component, OnInit, Input } from '@angular/core';
import Product from 'src/models/Product';
import { __importDefault } from 'tslib';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() hasFetchError: boolean;
  @Input() fetchMessageResponse: string;
  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }
}
