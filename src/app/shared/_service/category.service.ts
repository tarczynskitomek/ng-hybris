import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "app/shared/_model/category";
import { map } from "rxjs/operators";
import { Catalog } from "../_model/catalog";

@Injectable()
export class CategoryService {
  private mainCategoryPath = '/rest/v2/apparel-uk/catalogs/apparelProductCatalog/Online/categories/collections';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Catalog>(this.mainCategoryPath)
      .pipe(map(catalog => catalog.subcategories));
  }
}
