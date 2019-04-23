//Server communication variables
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Code to Access the mongoose database
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin1@ds149138.mlab.com:49138/store';
mongoose.connect(mongoDB, { useNewUrlParser:true });

var Schema = mongoose.Schema;
//A schema used for handling data with the stock model
var stockSchema = new Schema
({
    price:Number,
    size:Number,
    colour:String,
    brand:String,
    material:String
});//stockSchema

//The StockModel uses the collection in the DB and the schema created above
var StockModel = mongoose.model('stock', stockSchema);

//configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//sets what http methods the user is allowed to access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Read function that gets documents from the store DB => stock collection 
app.get('/api/store', function(req, res)
{
    StockModel.find(function(err, stock)
    {
        res.json(stock);
    });
})

app.post('api/store', function(req, res){
    console.log(req.body.price);
    console.log(req.body.size);
    console.log(req.body.colour);
    console.log(req.body.brand);
    console.log(req.body.material);

    StockModel.create({
        price:req.body.price,
        price:req.body.size,
        price:req.body.colour,
        price:req.body.brand,
        price:req.body.material
    });

    res.send("Stock added To DB")
})

//Server connection code
var server = app.listen(8081, function () 
{
    var host = server.address().address
    var port = server.address().port
    
    console.log("Listening at http://%s:%s", host, port)
 })