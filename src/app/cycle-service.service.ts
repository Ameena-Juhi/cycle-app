import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cycle } from './Cycle';

@Injectable({
  providedIn: 'root'
})
export class CycleServiceService {

  constructor(private _http:HttpClient) { }

  getAllCycles(): Observable<Cycle[]>{
    return this._http.get<Cycle[]>("http://localhost:8080/cycle/cycles");
  }

  borrowCycle(id : number): Observable<Cycle[]>{
    return this._http.get<Cycle[]>(`http://localhost:8080/cycle/borrow/${id}`);
  }

  returnCycle(id : number): Observable<Cycle[]>{
    return this._http.get<Cycle[]>(`http://localhost:8080/cycle/return/${id}`);
  }

  restockCycle(id : number, count : number): Observable<Cycle[]>{
    return this._http.post<Cycle[]>(`http://localhost:8080/cycle/restock/${id}`, {qty: count}, {
      responseType: 'json'
    });
  }

  addCycle(name: string, stock: number,price: number): Observable<Cycle[]>{
    return this._http.post<Cycle[]>(`http://localhost:8080/cycle/add`,{name: name, stock: stock, price:price},{responseType:'json'});
  }

}
