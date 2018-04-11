import { NgModule } from '@angular/core';
import { Routes } from "@angular/router/src/config";
import { RouterModule } from "@angular/router/";
import { CategoryComponent } from "../shared/category/category.component";

const ROUTES: Routes = [
  {path: 'categories/:id', component: CategoryComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule {
}
