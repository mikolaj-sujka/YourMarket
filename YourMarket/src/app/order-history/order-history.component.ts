import { Component, OnInit } from '@angular/core';

// services
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  totalAmount: number;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.totalAmount = this.basketService.getTotal();
    this.basketService.basket = [];
  }

  get randomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  get currentData() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayDate = mm + '/' + dd + '/' + yyyy;

    return todayDate;
  }
}
