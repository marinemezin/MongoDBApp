'use strict';

//Modules
var fs = require('fs');
var sys = require('sys'); 
var express = require('express'),
    app = express(),
    //mongoose = require('mongoose'),
    bodyParser = require('body-parser');

    app.use(express.logger());
    app.set("view options", {layout: false});
    app.use(express.static(__dirname + '/views'));


//Models
//var DBLP = require('./api/models/dblpModel');

/*global.config = require('./modules/config');
global.db = require('./modules/db');

mongoose.Promise = global.Promise;*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var routes = require('./api/routes/dblpRoutes');
routes(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});

app.get('/', function(req, res){
    res.render('/views/index.html');
});
