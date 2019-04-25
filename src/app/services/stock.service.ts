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

  //MAY NEED THIS FOR UPDATE OR DELETE OR MAY NOT NEED
  //array used for reading data out of it
  //private stockList : Stock[] = [];
  
  // gets all data that is stored in the node server that was read in from the mongoDB 
  getStockData():Observable<any>
  {
    return this.http.get("http://localhost:8080/api/store");
  }// getStock

  // Add stock to the DB
  addStockData(description:String, price:number, brand:String, condition:String, seller:String, contactInfo:String):Observable<any>
  {
    const stock : Stock = {description:description, price:price, brand:brand, condition:condition, seller:seller, contactInfo:contactInfo};
    return this.http.post("http://localhost:8080/api/store", stock);
  }
}// StockService