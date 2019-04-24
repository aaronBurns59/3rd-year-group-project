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
    return this.http.get("http://localhost:8080/api/store");
  }//getStock

  //Array for holding new stocks that are created
  private stocks: Stock[] = [];

  //Add stock to the DB
  addStockData(description:String, price:number, brand:String, condition:String, seller:String, contactInfo:String):Observable<any>
  {
    const stock : Stock = {description:description, price:price, brand:brand, condition:condition, seller:seller, contactInfo:contactInfo};
    return this.http.post("http://localhost:8080/api/store", stock);
  }
}//StockService