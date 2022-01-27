import { Component, Input, OnInit } from '@angular/core';

// services
import { NgxSpinnerService } from 'ngx-spinner';
import { BasketService } from '../services/basket.service';

// models 
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  isFiltered: boolean = false;
  foundProducts: Product[] | Product;

  constructor(private spinnerService: NgxSpinnerService, private basketService: BasketService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  isDataFiltered(foundProducts: Product[] | Product) {
    this.showSpinner();
    this.foundProducts = foundProducts;
    console.log(foundProducts)
    
    setTimeout(() => {
      this.isFiltered = true;
      this.spinnerService.hide();
    }, 2000)
  }

  onAddBasket(productChosen: Product) {
    console.log(productChosen)
    let product: Product = {
      name: productChosen.name,
      price: productChosen.price
    }
    console.log(product)
    this.basketService.addToBasket(product);
  }

  private showSpinner() {
    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.9)',
      color: '#905ECE',
      size: 'large',
    });
  }

}
