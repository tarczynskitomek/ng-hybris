import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "app/shared/_model/product";
import { map } from "rxjs/operators/map";

@Injectable()
export class ProductService {
  private productCache: Observable<Product[]>;

  constructor(private http: HttpClient) {
  }

  getProductsForCategory(categoryId: string): Observable<Product[]> {
    this.productCache = this.http.get<any>(
      '/rest/v2/apparel-uk/products/search',
      {params: new HttpParams().append('query', ':relevance:collection:' + categoryId)}
    )
      .pipe(map(resultPage => resultPage.products))
      .pipe(map(products => products || []));
    return this.productCache;
  }

  getProductForCode(productCode: number): Observable<Product> {
    let product$ = this.productCache.pipe(map(products => products.find(p => p.code === productCode)));
    return product$ ? product$ : this.http.get<Product>('rest/v2/apparel-uk/products/' + productCode);
  }

}
