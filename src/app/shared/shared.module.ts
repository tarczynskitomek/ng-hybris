import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoryService } from "./_service/category.service";
import { RouterModule } from "@angular/router/";
import { CategoryComponent } from './category/category.component';
import { ProductService } from "./_service/product.service";
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    CategoryComponent
  ],
  providers: [
    CategoryService,
    ProductService
  ],
  declarations: [NavigationComponent, CategoryComponent, ProductDetailsComponent]
})
export class SharedModule {
}
