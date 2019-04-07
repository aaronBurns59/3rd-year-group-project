import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../stock';

@Injectable({
  providedIn: 'root'
})
export class StockService 
{
  constructor(private http: HttpClient) {}

  private stockList : Stock[] = [];
  
  //goes to the DB on mlab, gets and return the url
  //of the collection store
  getStockData():Observable<any>
  {
    return this.http.get("http://localhost:8080/api/stock");
  }//getStock
}//StockService