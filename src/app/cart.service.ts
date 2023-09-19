import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cycle } from './Cycle';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) { }

  addToCartCycle(id : number): Observable<void>{
    return this._http.get<void>(`http://localhost:8080/cycle/addToCart/${id}`);
  }

  showCart() :Observable<Cycle[]>{
    return this._http.get<Cycle[]>("http://localhost:8080/cycle/showCart");
  }
}
