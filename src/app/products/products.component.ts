import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService){

  }

  fetchProducts(){
    this.productsService.getData()
      .subscribe({
        next:(data:Product[]) => {
          this.products = data
        }
      });
        
  }

  ngOnInit() {
    this.fetchProducts();
  }
}