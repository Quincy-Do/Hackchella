var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nonprofit = require('./models/nonprofit');
var organization = require('./models/organizations');
var app= express();
var config = require('./config.json')
mongoose.connect(`mongodb://${config.dbUSer}:${config.dbPassword}@ds119489.mlab.com:19489/hackchella`)

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());




app.get('/',function(req,res){
  
})
var port = 3000;
app.list(port);
