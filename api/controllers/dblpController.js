//Modules
var mongoose = require('mongoose');
//Utils
var errorHandler = require('../handlers/dblpHandler');
//Model
var HOST = 'localhost',
    PORT = 3000,
    DB = 'DBLP',
    URI = 'mongodb://' + HOST + '/' + DB;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:" + PORT + "/";

//Research
exports.launchQuery1 = function (req, res) {
    /*DBLP.find({ "authors": "Matthieu Cord" }, { "title": 1, "booktitle": 1, "year": 1 }).then(function (dblps) {
        res.status(200).json(dblps);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to get publications");
    });*/
    
    MongoClient.connect(URI, function (err, db) {
        if (err) throw err;
        var dbo = db.db("DBLP");

        var query = { type: "Article" };

        dbo.collection("publis").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
};

exports.launchQuery2 = function (req, res) {
    DBLP.find({ "booktitle": "SmartKom" }, { "title": 1 }).then(function (dblps) {
        res.status(200).json(dblps);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to get publications");
    });
};

exports.launchQuery3 = function (req, res) {
    DBLP.find({ "type": "Article", "booktitle": "Machine Learning Techniques for Multimedia" }, { "title": 1, "authors": 1 }).then(function (dblps) {
        res.status(200).json(dblps);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to get publications");
    });
};

exports.launchQuery4 = function (req, res) {
    DBLP.aggregate([{ "$match": { "authors": "Massimo Zacanaro" } }, { $project: { "title": 1, "year": 1 } }, { $sort: { "year": 1 } }]).then(function (dblps) {
        res.status(200).json(dblps);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to get publications");
    });
};

exports.launchQuery5 = function (req, res) {
    DBLP.aggregate([{ "$unwind": "$authors" }, { $group: { "_id": "$authors", "mean_year_pub": { $avg: "$year" } } }, { $sort: { "mean_year_pub": 1 } }]).then(function (dblps) {
        res.status(200).json(dblps);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to get publications");
    });
};