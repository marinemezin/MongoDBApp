'use strict';

module.exports = function (app) {
    var library = require('../controllers/libraryController');

    app.route('/api/albums')
        .get(library.getDisks)
        .post(library.addDisk);

    app.route('/api/albums/:albumId')
        .get(library.getDisk)
        .put(library.editDisk)
        .delete(library.deleteDisk);
};