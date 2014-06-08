'use strict';

// User routes use users controller
var projects = require('../controllers/projects');

module.exports = function(app, passport) {

    app.route('/api/projects').post(projects.create)

    app.route('/api/projects').get(projects.all)

    // Temporary debug method used to delete all tasks
    app.route('/api/projects/refresh').get(projects.refresh)


};