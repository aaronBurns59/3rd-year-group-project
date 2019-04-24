var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//allows us to access the mlab mongo database 
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin1@ds149138.mlab.com:49138/store';
mongoose.connect(mongoDB, { useNewUrlParser: true } );

var Schema = mongoose.Schema;
//a schema used for working with the data in the json database
var stockSchema = new Schema
({
    description:String,
    price:Number,
    size:String,
    colour:String,
    brand:String,
    material:String
});//stockSchema

//Initializing the vars that will create the data for the DB passing
//the respective schema and the appropriate collection
var StockModel = mongoose.model('stock', stockSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//allows the use of different http methods
app.use(function(req, res, next) 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

//writes a new entry into the database for the posts model
app.post('/api/store', function(req, res)
{
    console.log(req.body.description);
    console.log(req.body.price);
    console.log(req.body.size);
    console.log(req.body.colour);
    console.log(req.body.brand);
    console.log(req.body.material);
    
    StockModel.create(
    {
        description:req.body.description,
        price:req.body.price,
        size:req.body.size,
        colour:req.body.colour,
        brand:req.body.brand,
        material:req.body.material
    });  
    res.send("Stock added To DB")  
})

//gets the post from the mlab database
app.get('/api/store', function(req, res)
{
    StockModel.find(function(err, stock)
    {
        res.json(stock);
    });
})

//connects the server to the port localhost:8081
var server = app.listen(8080, function ()
 {
   var host = server.address().address
   var port = server.address().port 
   console.log("Listening at http://%s:%s", host, port)
})


