'use strict';

/* Controllers */

angular.module('sidecar.controllers', [])
	.controller('Nav', ['$scope', '$location', function ($scope, $location) {
		$scope.$location = $location;
	}])
	.controller('Project', ['$scope', function ($scope) {

	}])
	.controller('Tasks', ['$scope', function ($scope) {
		$('.dial').knob();
	}])
	.controller('Dashboard', ['$scope', function ($scope) {

	}]);
