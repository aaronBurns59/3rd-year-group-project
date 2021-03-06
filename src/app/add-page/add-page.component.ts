import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit 
{
  constructor(private service: StockService) { }
  
  onAddStock(form: NgForm)
  {
    //an instance variable of service which calls one of its methods
    this.service.addStockData(form.value.description, form.value.price, form.value.brand, form.value.condition, form.value.seller, form.value.contactInfo).subscribe();
    //logs the values to the console from the form not to the console of the client
    console.log(form.value);
    // resets the values of the input forms to null
    form.resetForm();
  }// onAddStock

  ngOnInit(){}

}// AddPageComponent
