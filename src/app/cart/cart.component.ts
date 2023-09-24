import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    
    this.cartService.getCart().subscribe(res => this.cartItems = res); 
  }


  checkOut(): void {
    console.log("here");
    this.cartService.checkout().subscribe(res => this.cartItems=res);
  }

  
}
