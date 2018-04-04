import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService {
  private mainCategoryPath = '/rest/v2/apparel-uk/catalogs/apparelProductCatalog/Online/categories/collections';

  constructor(private http: HttpClient) {
  }

  getCategories() {
    this.http.get<any>(
      this.mainCategoryPath
    ).subscribe(resp => console.log(resp));
  }
}
