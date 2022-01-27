import { Injectable } from '@angular/core';

// 3rd
import { ToastrService } from 'ngx-toastr';

// models
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  foundProducts: Product[] | Product;
  basket: Product[] = [];
  totalAmount: number; 

  constructor(private toastrService: ToastrService) {}

  addToBasket(product: Product) {
    this.basket.push(product);

    this.toastrService.success("Successfully add product to basket!", "Adding product success", {
      positionClass: 'toast-bottom-center'
    })
  }

  // setter

  setFilterData(foundProducts: Product[] | Product) {
    this.foundProducts = foundProducts;
  }
  
  setTotal(total: number) {
    this.totalAmount = total;
  }

  // getter

  getProducts() {
    return this.products;
  }

  getTotal() {
    return this.totalAmount;
  }

  getBasket() {
    return [...this.basket];
  }

  getFilteredData() {
    return this.foundProducts;
  }

  // products
  products: Product[] = [
    { name: 'Apple', price: 0.99 },
    { name: "Banana", price: 0.55 },
    { name: "Cranberry", price: 0.77 },
    { name: "Watermelon", price: 1.22 },
    { name: "Tomato", price: 0.66 },
    { name: "Potato", price: 0.75 },
    { name: "Christmas Tree", price: 25.55 },
    { name: "Christmas Pie", price: 5.22 },
    { name: "Christmas Ball", price: 0.68 },
    { name: "Knife", price: 1.33 },
    { name: "Spoon", price: 1.44 },
    { name: "Fork", price: 1.34 },
    { name: "Plate", price: 1.99 },
    { name: "Cup", price: 1.44 }
  ];
}
