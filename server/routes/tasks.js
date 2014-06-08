'use strict';

// User routes use users controller
var tasks = require('../controllers/tasks');

module.exports = function(app, passport) {

    app.route('/api/tasks').post(tasks.create)

    app.route('/api/tasks').get(tasks.all)

    // Temporary debug method used to delete all tasks
    app.route('/api/tasks/refresh').get(tasks.refresh)


};