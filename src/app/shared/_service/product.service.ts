import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "app/shared/_model/product";
import { map } from "rxjs/operators/map";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductsForCategory(categoryId: string): Observable<Product[]> {
    return this.http.get<any>('/rest/v2/apparel-uk/products/search')
      .pipe(map(resultPage => resultPage.products))
      .pipe(map(products => products || []));
  }

}
