'use strict';

var HOST = 'localhost',
    PORT = 3000,
    DB = 'DBLP',
    URI = 'mongodb://' + HOST + '/' + DB;

module.exports = {
    HOST: HOST,
    PORT: PORT,
    DB: DB,
    URI: URI
}