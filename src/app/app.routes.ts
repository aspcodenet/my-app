import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'products/:id',
        component:SingleproductComponent
    },
    {
        path:'products',
        component:ProductsComponent
    },

];
