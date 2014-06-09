'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var DashboardSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
})

mongoose.model('Dashboard', DashboardSchema);