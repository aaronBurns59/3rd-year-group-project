import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Observable } from 'rxjs';
import { Stock } from '../stock';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit 
{
  stocks:any = [];

  constructor(private service:StockService) { }

  ngOnInit()
  {  
      this.service.getStockData().subscribe(data => 
      {
        this.stocks = data;
      });
  }// ngOnInit

  onDelete(id:string)//
  {
    // returns a message giving the id of the item that was deleted
    console.log("Item with id: " + id + " deleted");
    this.service.deleteStock(id).subscribe(()=>
    {
      this.ngOnInit();
    });
  }// onDelete

}// DisplayPageComponent
