'use strict';

//Modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./api/views"));

var routes = require('./api/routes/dblpRoutes');
routes(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});