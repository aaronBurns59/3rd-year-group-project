//Server communication variables
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Code to Access the mongoose database
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin1@ds149138.mlab.com:49138/store'
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
//A schema used for handling data with the stock model
var stockSchema = new Schema
({
    price:number,
    size:number,
    colour:String,
    brand:String,
    material:String,
})//stockSchema

//The StockModel uses the collection in the DB and the schema created above
var StockModel = mongoose.model('stock', stockSchema);

//configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());