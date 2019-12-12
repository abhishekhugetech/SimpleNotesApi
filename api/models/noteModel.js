'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Notes', NoteSchema);
