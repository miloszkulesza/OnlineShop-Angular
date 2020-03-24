import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './products-view/products-view.component';

const appRoutes: Routes = [
  { path: '', component: ProductsViewComponent },
  { path: 'productDetails/:productId', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsListComponent,
    CategoriesListComponent,
    ProductDetailsComponent,
    ProductsViewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
