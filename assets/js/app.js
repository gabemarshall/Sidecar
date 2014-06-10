'use strict';

// Declare app level module which depends on filters, and services
angular.module('sidecar', [
	'ngRoute',
	'sidecar.filters',
	'sidecar.services',
	'sidecar.directives',
	'sidecar.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'Settings'});
	$routeProvider.when('/reports', {templateUrl: 'partials/reports.html', controller: 'Reports'});
	$routeProvider.when('/invoices', {templateUrl: 'partials/invoices.html', controller: 'Invoices'});
	$routeProvider.when('/documents', {templateUrl: 'partials/documents.html', controller: 'Documents'});
	$routeProvider.when('/leads', {templateUrl: 'partials/leads.html', contoller: 'Leads'});
	$routeProvider.when('/clients', {templateUrl: 'partials/clients.html', controller: 'Clients'});
	$routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'Project'});
	$routeProvider.when('/', {templateUrl: 'partials/dashboard.html', controller: 'Dashboard'});
	$routeProvider.otherwise({redirectTo: 'dashboard'});
}]);
