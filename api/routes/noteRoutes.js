'use strict';
module.exports = function (app) {
    var note = require('../controllers/noteController');

    // todoList Routes
    app.route('/note')
        .post(note.create_note);


    app.route('/note/:userId')
        .get(note.list_all_note)
        .put(note.update_note)
        .delete(note.delete_note);
};

