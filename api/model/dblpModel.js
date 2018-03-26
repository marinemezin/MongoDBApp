'use strict';
//Modules
var mongoose = require('mongoose');
//Schema
var Schema = mongoose.Schema;

var PublisSchema = new Schema({
    _id: {
        type: String
    },
    type: {
        type: String
    },
    year: {
        type: Number
    },
    title: {
        type: String
    },
    authors: {
        type: [String]
    },
    pages: {
        start: {
            type: Number
        },
        end: {
            type: Number
        }
    },
    booktitle: {
        type: String
    },
    journal: {
        series: {
            type: String
        },
        editor: {
            type: String
        },
        volume: {
            type: String
        },
        isbn: {
            type: [String]
        }
    },
    url: {
        type: String
    },
    cites: {
        type: String
    }
}, { versionKey: false });

module.exports = mongoose.model('Publications', PublisSchema);