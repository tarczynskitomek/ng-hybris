import { NgModule } from '@angular/core';
import { Routes } from "@angular/router/src/config";
import { RouterModule } from "@angular/router/";
import { CategoryComponent } from "../shared/category/category.component";
import { ProductDetailsComponent } from "../shared/product-details/product-details.component";

const ROUTES: Routes = [
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'product/:id', component: ProductDetailsComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule {
}
