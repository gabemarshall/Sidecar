'use strict';

/* Controllers */

angular.module('sidecar.controllers', [])
	.controller('Nav', ['$scope', '$location', function ($scope, $location) {
		$scope.$location = $location;
	}])
	.controller('Project', ['$scope', function ($scope) {
		// Modal controller
		$scope.modalShown = false;
  		$scope.toggleModal = function() {
    		$scope.modalShown = !$scope.modalShown;
  		};
	}])
	.controller('Tasks', ['$scope', function ($scope) {
		// jQuery Knobs for Project Health radial progress bars
		$('.dial').knob();

		// Modal controller
		$scope.modalShown = false;
  		$scope.toggleModal = function() {
    		$scope.modalShown = !$scope.modalShown;
  		};

  		// Templates
  		$scope.templates = [
  			{ name: 'Overview', url: 'partials/project/overview.html' },
  			{ name: 'Tasks', url: 'partials/project/tasks.html' }
  		];
  		$scope.template = $scope.templates[0];
	}])
	.controller('Dashboard', ['$scope', function ($scope) {

	}]);
