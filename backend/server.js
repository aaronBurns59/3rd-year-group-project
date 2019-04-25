// variables needed to operate the server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// need to declare and connect the mongoDB in the app
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin1@ds149138.mlab.com:49138/store';
mongoose.connect(mongoDB, { useNewUrlParser: true } );

// a schema used for realating data in the model to the data in the DB
// this is used in both read and write functions
var Schema = mongoose.Schema;
var stockSchema = new Schema
({
    description:String,
    price:Number,
    brand:String,
    condition:String,
    seller:String,
    contactInfo:String
});// stockSchema

// Creates a new Model for the server to work with based on the above schema and the name of the model
// that schema is based off
var StockModel = mongoose.model('stock', stockSchema);

// configuring express to use the bodyparser as middle-ware.
// for serialising and deserialising json
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// These are the Http permissions that the server has access to 
app.use(function(req, res, next) 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

// This post functions used to write new data into the DB
app.post('/api/store', function(req, res)
{
    // displays the data in the console of the server terminal
    // just to show it is reading in the data from the web page
    console.log(req.body.description);
    console.log(req.body.price);
    console.log(req.body.brand);
    console.log(req.body.condition);
    console.log(req.body.seller);
    console.log(req.body.contactInfo);

    // actually builds the data tht is added to the db
    StockModel.create(
    {
        // req is the request to the server
        description:req.body.description,
        price:req.body.price,
        brand:req.body.brand,
        condition:req.body.condition,
        seller:req.body.seller,
        contactInfo:req.body.contactInfo
    });  
    res.send("Stock added To DB")  
})

// this get function is used to read all data in the DB to the display component
app.get('/api/store', function(req, res)
{
    
    StockModel.find(function(err, stock)
    {
        // res is the response from the server
        res.json(stock);
    });
})

//connects the server to the port localhost:8081
var server = app.listen(8080, function ()
 {
   var host = server.address().address
   var port = server.address().port
   // tells the user that the client is running
   console.log("Listening at http://%s:%s", host, port)
})


