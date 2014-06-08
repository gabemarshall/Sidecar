'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Task');


exports.create = function(req, res, next) {
    var task = new Task({
        title: "Testing"
    })
    task.save(function(err) {

        if (err) {
            console.log("task not saved")
            res.status(500)
        } else {
            console.log("task saved");
            res.status(200)
        }

    });

}

exports.all = function(req, res, next){
    Task.find(function(err, doc){
        res.json(doc)
        console.log(doc)
    });
}

exports.refresh = function(req, res, next){
    Task.find().remove().exec();
    res.send("Deleted all tasks")
}