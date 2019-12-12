'use strict';


var mongoose = require('mongoose'),
    Note = mongoose.model('Notes');

exports.list_all_note = function (req, res) {
    Note.find({ userId: req.params.userId }, function (err, note) {
        if (err)
            res.send(err);
        res.status(200).json({
            "message" : 'Data Syncing Successfully.',
            "success" : true,
            "data" : note
        });
    });
};

// Create a note
exports.create_note = function (req, res) {
    console.log(req.body);

    var new_note = new Note(req.body);
    new_note.save(function (err, note) {
        if (err)
            res.send(err);
        res.status(200).json({
            "message" : 'Note added Successfully.',
            "success" : true,
            "data" : note
        });
    });
};

// Update a note
exports.update_note = async function (req, res) {

    const filter = { _id: req.body.note_id , userId : req.body.userId };
    const update = req.body;


    let doc = await Note.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true // Make this update into an upsert
    });
    res.status(200).json({
        "message" : 'Note Updated Successfully.',
        "success" : true,
        "data" : doc
    });
};

// Delete Note.
exports.delete_note = function (req, res) {
    Note.remove({
        _id: req.query.note_id,
        userId : req.params.userId
    }, function (err, note) {
        if (err)
            res.send(err);
        res.status(200).json({
            "message" : 'Note deleted successfully.',
            "success" : true
         });
    });
};
