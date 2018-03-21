'use strict';

module.exports = function (app) {
    var dblp = require('../controllers/dblpController');

    app.route('/query1')
        .get(dblp.launchQuery1)

    app.route('/query2')
        .get(dblp.launchQuery2)
};