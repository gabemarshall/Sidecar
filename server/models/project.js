'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
})

mongoose.model('Project', ProjectSchema);