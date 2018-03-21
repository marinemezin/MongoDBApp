'use strict';

module.exports = function (app) {
    var library = require('../controllers/dblpController');

    app.route('/xxx')
        .get(library.XXX)

    app.route('/xxx')
        .get(library.XXX)
};