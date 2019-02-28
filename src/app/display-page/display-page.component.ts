import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit 
{
  constructor(private service:StockService) { }

  stocks:any = [];

  ngOnInit() 
  {
    this.service.getStockData().subscribe(data => 
      {
        this.stocks = data;
       });
  }

}
