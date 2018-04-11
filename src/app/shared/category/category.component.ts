import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router/";
import { ProductService } from "../_service/product.service";
import { Observable } from "rxjs/Observable";
import { Product } from "../_model/product";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  product$: Observable<Product[]>;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product$ = this.productService.getProductsForCategory(params['id']);
    });
  }

}
