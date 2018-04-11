import { Component, OnInit } from '@angular/core';
import { ProductService } from "../_service/product.service";
import { Product } from "../_model/product";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.product$ = this.productService.getProductForCode(params['id']));
  }

}
