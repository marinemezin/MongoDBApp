'use strict';

//Modules
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Models
var Publis = require('./api/model/dblpModel');
Publis = mongoose.model('Publis');

//Connection to mongoDB
var url = "mongodb://localhost:27017/dblp";
mongoose.Promise = global.Promise;
mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./api/views"));

//Routes for css
app.get('/api/views/style.css', function (req, res) {
    res.sendFile(__dirname + "/api/views/" + "style.css");
})

//Routes for html files
app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/api/views/" + "admin_id.html");
})

var routes = require('./api/routes/dblpRoutes');
routes(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});