//Modules
var mongoose = require('mongoose');
//Utils
var errorHandler = require('../handlers/dblpHandler');
//Model
var DBLP = db.model('publis');

//Research
exports.launchQuery1 = function (req, res) {
    DBLP.find({ "authors": "Matthieu Cord" }, { "title": 1, "booktitle": 1, "year": 1 }).then(function (dblps) {
        res.status(200).json(dblps);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to get publications");
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