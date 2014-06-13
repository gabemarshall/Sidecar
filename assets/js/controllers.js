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
		$scope.modalShown = false;
  		$scope.toggleModal = function() {
    		$scope.modalShown = !$scope.modalShown;
  		};
	}])
	.controller('Dashboard', ['$scope', function ($scope) {

	}]);
