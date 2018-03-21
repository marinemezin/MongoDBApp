'use strict';

module.exports = function (app) {
    var dblp = require('../controllers/dblpController');

    app.route('/xxx')
        .get(dblp.XXX)

    app.route('/xxx')
        .get(dblp.XXX)
};