import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../_service/category.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories();
  }

}
