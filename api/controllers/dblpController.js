//Utils
var errorHandler = require('../handlers/dblpHandler');
//Model
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dblp";

//Researches
exports.launchQuery1 = function (req, res) {
    try {
        MongoClient.connect(url, function (err, client) {
            var db = client.db('dblp');
            db.collection('publis').find({ authors: "Matthieu Cord" }, { title: 1, booktitle: 1, year: 1 }).toArray()
                .then(function (dblps) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(dblps, null, 3));
                }).catch(function (err) {
                    errorHandler.error(res, err.message, "Failed to get publications");
                });
        });
    }
    catch (err) {
        errorHandler.error(res, err.message, "Failed to connect to the database");
    }
}

exports.launchQuery2 = function (req, res) {
    try {
        MongoClient.connect(url, function (err, client) {
            var db = client.db('dblp');
            db.collection('publis').find({ booktitle: "SmartKom" }, { title: 1 }).toArray()
                .then(function (dblps) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(dblps, null, 3));
                }).catch(function (err) {
                    errorHandler.error(res, err.message, "Failed to get publications");
                });
        });
    }
    catch (err) {
        errorHandler.error(res, err.message, "Failed to connect to the database");
    }
};

exports.launchQuery3 = function (req, res) {
    try {
        MongoClient.connect(url, function (err, client) {
            var db = client.db('dblp');
            db.collection('publis').find({ type: "Article", booktitle: "Machine Learning Techniques for Multimedia" },
                { title: 1, authors: 1 }).toArray()
                .then(function (dblps) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(dblps, null, 3));
                }).catch(function (err) {
                    errorHandler.error(res, err.message, "Failed to get publications");
                });
        });
    }
    catch (err) {
        errorHandler.error(res, err.message, "Failed to connect to the database");
    }
};

exports.launchQuery4 = function (req, res) {
    try {
        MongoClient.connect(url, function (err, client) {
            var db = client.db('dblp');
            db.collection('publis').aggregate([
                { $match: { authors: "Massimo Zancanaro" } },
                { $project: { title: 1, year: 1 } },
                { $sort: { year: 1 } }]).toArray()
                .then(function (dblps) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(dblps, null, 3));
                }).catch(function (err) {
                    errorHandler.error(res, err.message, "Failed to get publications");
                });
        });
    }
    catch (err) {
        errorHandler.error(res, err.message, "Failed to connect to the database");
    }
};

exports.launchQuery5 = function (req, res) {
    try {
        MongoClient.connect(url, function (err, client) {
            var db = client.db('dblp');
            db.collection('publis').aggregate([
                { $unwind: "$authors" },
                { $group: { _id: "$authors", mean_year_pub: { $avg: "$year" } } },
                { $sort: { mean_year_pub: 1 } }]).toArray()
                .then(function (dblps) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(dblps, null, 3));
                }).catch(function (err) {
                    errorHandler.error(res, err.message, "Failed to get publications");
                });
        });
    }
    catch (err) {
        errorHandler.error(res, err.message, "Failed to connect to the database");
    }
};

exports.launchQuery6 = function (req, res) {
    var authorName = req.query.a_name;
    var typeName = req.query.a_type;

    var query;
    if (authorName != "") {
        if (typeName != "") { query = { authors: authorName, type: typeName }; }
        else { query = { authors: authorName }; }
    }
    else {
        if (typeName != "") { query = { type: typeName }; }
        else { query = {}; }
    }

    try {
        MongoClient.connect(url, function (err, client) {
            var db = client.db('dblp');
            db.collection('publis').find(query, { title: 1, booktitle: 1, year: 1 }).toArray()
                .then(function (dblps) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(dblps, null, 3));
                }).catch(function (err) {
                    errorHandler.error(res, err.message, "Failed to get publications");
                });
        });
    }
    catch (err) {
        errorHandler.error(res, err.message, "Failed to connect to the database");
    }
}

exports.launchQuery7 = function (req, res) {
    var query = req.query.createQuery;
    var order = req.query.orderBy;

    try {
        var finalQuery = [];
        finalQuery.push(JSON.parse(query));
        if (order != "") {
            finalQuery.push(JSON.parse(order));
        }
    }
    catch (err) {
        errorHandler.error(res, err.message, "Bad query");
    }

    try {
        MongoClient.connect(url, function (err, client) {
            var db = client.db('dblp');
            db.collection('publis').find(finalQuery[0], finalQuery[1]).toArray()
                .then(function (dblps) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(dblps, null, 3));
                }).catch(function (err) {
                    errorHandler.error(res, err.message, "Failed to get publications");
                });
        });
    }
    catch (err) {
        errorHandler.error(res, err.message, "Failed to connect to the database");
    }
}