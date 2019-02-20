//Server communication variables
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Code to Access the mongoose database
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin1@ds149138.mlab.com:49138/store'
mongoose.connect(mongoDB);

//Generate a model in the src folder
