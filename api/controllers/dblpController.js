//Utils
var errorHandler = require('../handlers/dblpHandler');
//Model
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dblp";


//Research
exports.launchQuery1 = function (req, res) {
    MongoClient.connect(url, function (err, client) {
        var db = client.db('dblp');
        db.collection('publis').find({ authors: "Matthieu Cord" }, { title: 1, booktitle: 1, year: 1 }).toArray()
            .then(function (dblps) {
                res.status(200).json(dblps);
            }).catch(function (err) {
                errorHandler.error(res, err.message, "Failed to get publications");
            });
    });
}

exports.launchQuery2 = function (req, res) {
    MongoClient.connect(url, function (err, client) {
        var db = client.db('dblp');
        db.collection('publis').find({ booktitle: "SmartKom" }, { title: 1 }).toArray()
            .then(function (dblps) {
                res.status(200).json(dblps);
            }).catch(function (err) {
                errorHandler.error(res, err.message, "Failed to get publications");
            });
    });
};

exports.launchQuery3 = function (req, res) {
    MongoClient.connect(url, function (err, client) {
        var db = client.db('dblp');
        db.collection('publis').find({ type: "Article", booktitle: "Machine Learning Techniques for Multimedia" },
                { title: 1, authors: 1 }).toArray()
            .then(function (dblps) {
                res.status(200).json(dblps);
            }).catch(function (err) {
                errorHandler.error(res, err.message, "Failed to get publications");
            });
    });
};

exports.launchQuery4 = function (req, res) {
    MongoClient.connect(url, function (err, client) {
        var db = client.db('dblp');
        db.collection('publis').aggregate([
                { $match: { authors: "Massimo Zancanaro" } },
                { $project: { title: 1, year: 1 } },
                { $sort: { year: 1 } }]).toArray()
            .then(function (dblps) {
                res.status(200).json(dblps);
            }).catch(function (err) {
                errorHandler.error(res, err.message, "Failed to get publications");
            });
    });
};

exports.launchQuery5 = function (req, res) {
    MongoClient.connect(url, function (err, client) {
        var db = client.db('dblp');
        db.collection('publis').aggregate([
                { $unwind: "$authors" },
                { $group: { _id: "$authors", mean_year_pub: { $avg: "$year" } } },
                { $sort: { mean_year_pub: 1 } }]).toArray()
            .then(function (dblps) {
                res.status(200).json(dblps);
            }).catch(function (err) {
                errorHandler.error(res, err.message, "Failed to get publications");
            });
    });
};

exports.launchQuery6 = function (req, res) {
    var authorName = req.url.split("=")[1];
    console.log(authorName);
    MongoClient.connect(url, function (err, client) {
        var db = client.db('dblp');
        db.collection('publis').find({ authors: authorName }, { title: 1, booktitle: 1, year: 1 }).toArray()
            .then(function (dblps) {
                res.status(200).json(dblps);
            }).catch(function (err) {
                errorHandler.error(res, err.message, "Failed to get publications");
            });
    });
}

exports.login = function (req, res) {
    //console.log(req.url);
    //console.log(req.url.split("="));
    console.log("on est la");

    /*var true_username = "admin";
    var true_password = "admin";

    var username = "admin";
    var password = "admin";

    if (username == true_username && password == true_password) {
        window.location.href = 'index.html'
        res.end('true');
    }
    else {
        res.end('false');
    }*/
}