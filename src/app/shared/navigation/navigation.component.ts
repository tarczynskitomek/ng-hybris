import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../_service/category.service";
import { Observable } from "rxjs/Observable";
import { Category } from "../_model/category";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  categories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
