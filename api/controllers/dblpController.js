//Modules
var mongoose = require('mongoose');
//Utils
var errorHandler = require('../handlers/dblpHandler');
//Model
var DBLP = db.model('publis');

//Research
exports.launchQuery1 = function (req, res) {
    DBLP.getCollection('publis').find({"authors":"Matthieu Cord"}, {"title":1, "booktitle":1, "year":1})
};

exports.launchQuery2 = function (req, res) {
	DBLP.getCollection('publis').find ({"booktitle":"SmartKom"},{"title":1})
};

exports.launchQuery3 = function (req, res) {
	DBLP.getCollection('publis').find({"type":"Article", "booktitle":"Machine Learning Techniques for Multimedia"},{"title":1, "authors":1})
};

exports.launchQuery4 = function (req, res) {
	DBLP.getCollection('publis').aggregate([$match : {"authors" : "Massimo Zacanaro"}},{$project : {"title":1, "year":1}},{$sort : {"year":1}}]);
};

exports.launchQuery5 = function (req, res) {
	DBLP.getCollection('publis').aggregate([{"$unwind":"$authors"},{$group : {"_id":"$authors", "mean_year_pub" : {$avg : "$year"}}},{$sort : {"mean_year_pub":1}}])
};