import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoryService } from "./_service/category.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    CategoryService
  ],
  declarations: [NavigationComponent]
})
export class SharedModule { }
