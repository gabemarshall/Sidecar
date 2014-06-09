'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'Project'});
  $routeProvider.when('/', {templateUrl: 'partials/dashboard.html', controller: 'Dashboard'});
  $routeProvider.otherwise({redirectTo: 'dashboard'});
}]);
