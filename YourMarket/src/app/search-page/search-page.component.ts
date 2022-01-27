import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  isFiltered: boolean = false;
  foundProducts: Product[] | Product;

  constructor() { }

  ngOnInit(): void {
  }

  isDataFiltered(foundProducts: Product[] | Product) {
    this.isFiltered = true;
    this.foundProducts = foundProducts;
    console.log(foundProducts)
  }

  onAddBasket(product: Product) {
    console.log(product)
  }

}
