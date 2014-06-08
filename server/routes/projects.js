'use strict';

// User routes use users controller
var projects = require('../controllers/projects');

module.exports = function(app, passport) {

    app.route('/projects').post(projects.create)

    app.route('/projects').get(projects.all)

    // Temporary debug method used to delete all tasks
    app.route('/projects/refresh').get(projects.refresh)


};