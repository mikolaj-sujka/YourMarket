import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// models 
import { Product } from '../models/product.model';

// services
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-my-basket-view',
  templateUrl: './my-basket-view.component.html',
  styleUrls: ['./my-basket-view.component.scss']
})
export class MyBasketViewComponent implements OnInit {
  basket: Product[] = [];

  constructor(private basketService: BasketService, private router: Router,
              private toastrService: ToastrService, private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.basket = this.basketService.getBasket();
  }

  get Total() {
    let total = 0;
    this.basket.forEach((product) => {
      total += product.price;
    })

    return total;
  }

  onCheckout() {
    this.showSpinner();

    setTimeout(() => {
      this.router.navigateByUrl("/order-history");
      this.spinnerService.hide();
    }, 2000)
  }

  private showSpinner() {
    this.spinnerService.show(undefined, {
      type: 'square-loader',
      bdColor: 'rgba(255,255,255,0.9)',
      color: '#905ECE',
      size: 'large',
    });
  }

}
