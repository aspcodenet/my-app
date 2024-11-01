import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../types';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService : ProductsService  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.productService.getSingle(id.toString()).subscribe(data=>{
      this.product = data
    });
  }
}
