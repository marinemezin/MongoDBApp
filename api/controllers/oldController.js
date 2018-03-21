'use strict';
//Modules
var mongoose = require('mongoose');
//Utils
var errorHandler = require('../handlers/errorHandler.js');
//Model
var Album = db.model('Albums');

//ok
exports.getDisks = function (req, res) {
    Album.find({}).then(function (albums) {
        res.status(200).json(albums);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to get albums");
    });
};

//ok
exports.addDisk = function (req, res) {
    var newAlbum = new Album(req.body);
    newAlbum.save().then(function (album) {
        res.status(201).json(album);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Failed to create new album.");
    });
};

//ok
exports.getDisk = function (req, res) {
    Album.findById(req.params.albumId).exec().then(function (album) {
        if (album === null) {
            throw new Error("Album not found for value \"" + req.params.albumId + "\"");
        }
        res.status(200).json(album);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Album not found", 404);
    });
};

//ok
exports.editDisk = function (req, res) {
    Album.findOneAndUpdate({ _id: req.params.albumId }, req.body, { new: true }).then(function (album) {
        if (album === null) {
            throw new Error("No album to be updated for value \"" + req.params.albumId + "\"");
        }
        res.status(200).json(album);
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Album not found", 404);
    });
};

//ok
exports.deleteDisk = function (req, res) {
    Album.remove({ _id: req.params.albumId }).then(function (album) {
        if (album.result.n === 0) {
            throw new Error("No album to be deleted for value \"" + req.params.albumId + "\"");
        }
        res.status(200).json({ message: 'Album successfully deleted' });
    }).catch(function (err) {
        errorHandler.error(res, err.message, "Album not found", 404);
    });
};