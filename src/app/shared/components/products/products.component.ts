import { Component, OnInit, inject } from '@angular/core';
import { Iproduct } from '../../models/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData !: Array<Iproduct>

  private _productsService = inject(ProductsService);
  constructor() { }

  ngOnInit(): void {
    this.productsData = this._productsService.fetchAllProducts()
  }

}
