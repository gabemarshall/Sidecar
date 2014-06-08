'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
})

mongoose.model('Task', TaskSchema);