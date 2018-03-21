'use strict';
//Modules
var mongoose = require('mongoose');
//Schema
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter the title of the album.'
    },
    artists: {
        type: [String],
        required: 'Please enter the name(s) of the artist(s).'
    },
    released: {
        type: Date,
        default: Date.now
    },
    style: {
        type: String,
        enum: ['Progressive rock', 'Pop', 'Funk'],
        default: 'Pop'
    }
}, { versionKey: false });

module.exports = mongoose.model('Albums', AlbumSchema);

//To save something in the array
//person.tags = person.tags.slice(); // Clone the tags array
//person.tags[0] = "new tag";
//person.save();