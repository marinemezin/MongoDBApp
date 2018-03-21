'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PublicationSchema = new Schema({
	_id : {
		type : String,
		required : 'Id'
	},
	type : {
		type : String,
		required : 'Type of publication'
	},
	year : {
		type : int32,
		required : 'Year of publication'
	},
	title : {
		type : String,
		required : 'Title of publication'
	},
	authors : {
		type : [String],
		required : 'Author(s) of publication'
	},
	pages : {
		start : {
		type : int32,
		required : 'Page of start of publication'
		},
		end : {
		type : int32,
		required : 'Page of end of publication'
		}
	},
	booktitle : {
		type : String,
		required : 'Title of booktitle of publication'
	},
	journal : {
		series : {
			type : String,
			required : 'Series of journal of publication'
		},
		editor : {
			type : String,
			required : 'Editor of journal of publication'
		},
		volume : {
			type : String,
			required : 'Volume of journal of publication'
		},
		isbn : {
			type : [String],
			required : 'ISBN(s) of journal of publication'
		}		
	},
	url : {
		type : String,
		required : 'Link of publication'
	},
	cities : {
		type : [String],
		required : 'City/Cities of publication'
	}
}, { versionKey: false });

module.exports = mongoose.model('Publication', PublicationSchema);