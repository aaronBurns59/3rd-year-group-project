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
    return this.http.get("http://localhost:8081/api/store");
  }//getStock

  //Array for holding new stocks that are created
  private stocks: Stock[] = [];

  //Add stock to the DB
  addStockData(price:number, size:number, colour:string, brand:string, material:string):Observable<any>
  {
    const stock : Stock = {price:price, size:size, colour:colour, brand:brand, material:material};
    return this.http.post("http://localhost:8081/api/store", stock);
  }
}//StockService