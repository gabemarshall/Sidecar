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
	$routeProvider.when('/documents/:name', {templateUrl: 'partials/document.html', controller: 'Document'});
	$routeProvider.when('/document-templates', {templateUrl: 'partials/document-templates.html', controller: 'DocumentTemplates'});
	$routeProvider.when('/document-types', {templateUrl: 'partials/document-types.html', controller: 'DocumentTypes'});
	$routeProvider.when('/prospects', {templateUrl: 'partials/prospects.html', controller: 'Prospects'});
	$routeProvider.when('/prospects/prospect', {templateUrl: 'partials/prospect.html', contoller: 'Prospect'});
	$routeProvider.when('/clients', {templateUrl: 'partials/clients.html', controller: 'Clients'});
	$routeProvider.when('/clients/:name', {templateUrl: 'partials/client.html', controller: 'Client'});
	$routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'Project'});
	$routeProvider.when('/projects/:title', {templateUrl: 'partials/tasks.html', controller: 'Tasks'});
	$routeProvider.when('/', {templateUrl: 'partials/dashboard.html', controller: 'Dashboard'});
	$routeProvider.otherwise({redirectTo: 'dashboard'});
}]);
