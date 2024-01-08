import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmoloyeelistComponent } from './emoloyeelist/emoloyeelist.component';
import { DetailsComponent } from './details/details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

const routes: Routes = [
  {path:'',component:EmoloyeelistComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'product-cart', component: ProductCartComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
