'use strict';

//Modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('api/views/index.html', { root: __dirname });
});

var routes = require('./api/routes/dblpRoutes');
routes(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});

app.get('/', function(req, res){
    res.render('/views/index.html');
});
