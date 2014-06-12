'use strict';

/* Controllers */

angular.module('sidecar.controllers', [])
	.controller('Nav', ['$scope', '$location', function ($scope, $location) {
		$scope.$location = $location;
	}])
	.controller('Project', ['$scope', function ($scope) {

	}])
	.controller('Dashboard', ['$scope', function ($scope) {

	}]);
