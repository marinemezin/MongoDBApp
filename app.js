'use strict';

//Modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./api/views"));

//Route for css
app.get('/api/views/style.css', function (req, res) {
    res.sendFile(__dirname + "/api/views/" + "style.css");
})

//Route for html file
app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/api/views/" + "admin_id.html");
})

var routes = require('./api/routes/dblpRoutes');
routes(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});