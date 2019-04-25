import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit 
{
  // need to hold data read in from db
  stock: any = [];

  // routers params are needed or moving back to the diplay page I THINK
  constructor(private route:ActivatedRoute, private service:StockService, private router:Router){}

  ngOnInit()
  {
    // logs the id that is read in from the db to show it is working
    console.log(this.route.snapshot.params['id']);
    // this get method is different form the other read method because it needs to read in an id as well
    this.service.getUpdateData(this.route.snapshot.params['id']).subscribe(data => {this.stock=data;});
  }// ngOnInit

  //calls the method in the post.service.ts that actually updates the data in the db and the client webpage
  onUpdate(form: NgForm)
  {
    //have to subscribe due to the router vat being used
    this.service.updateStock(this.stock._id, form.value.description, form.value.price, form.value.brand, form.value.condition, form.value.seller, form.value.contactInfo)
    .subscribe(() =>{this.router.navigate(['/display']);});
  }// onUpdate

}// UpdatePageComponent
