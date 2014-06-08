'use strict';

var mongoose = require('mongoose'),
    Project = mongoose.model('Project');


exports.create = function(req, res, next) {
    var project = new Project({
        title: "Testing"
    })
    project.save(function(err) {

        if (err) {
            console.log("Project not saved")
            res.status(500)
        } else {
            console.log("Project saved");
            res.status(200)
        }

    });

}

exports.all = function(req, res, next){
    Project.find(function(err, doc){
        res.json(doc)
        console.log(doc)
    });
}

exports.refresh = function(req, res, next){
    Project.find().remove().exec();
    res.send("Deleted all Projects ")
}