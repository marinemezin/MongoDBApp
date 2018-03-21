'use strict';

//Modules
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Models
//var DBLP = require('./api/models/dblpModel');

global.config = require('./modules/config');
global.db = require('./modules/db');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./api/routes/dblpRoutes');
routes(app);

var port = process.env.PORT || config.PORT;

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});