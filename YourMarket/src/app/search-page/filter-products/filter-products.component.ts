import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { find } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {
  products: Product[];
  @Output() dataFiltred = new EventEmitter<Product[]>();

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.products = this.basketService.getProducts();
  }

  public onSearchProduct(form: NgForm) {
    let name = form.value.productName;
    let findArticles = (this.findProduct(name) as Product[]);
    this.dataFiltred.emit(findArticles);
  }

  private findProduct(productName: string) {
    if(productName === '') {
      return this.products;
    }
    return this.products.filter(p => p.name === productName);
  }
}
