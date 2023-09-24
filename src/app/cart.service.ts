import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) {}

  addToCart(id: number): Observable<any> {
  return this._http.post(`http://localhost:8080/cycle/addToCart/${id}`,{});
    
  }

  getCart(): Observable<CartItem[]> { 
    return this._http.get<CartItem[]>("http://localhost:8080/cycle/showCart");
  }


  checkout(): Observable<CartItem[]> {
    console.log("service");
    return this._http.post<CartItem[]>('http://localhost:8080/cycle/checkout',{});
  }

}
