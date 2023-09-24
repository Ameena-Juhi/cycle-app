import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CycleShopComponent } from './cycle-shop/cycle-shop.component';

const routes: Routes = [{path:'',component:CycleShopComponent},
{path:'cycleStore',component:CycleShopComponent},
  {path:'cart', component: CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
