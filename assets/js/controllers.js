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
		$('.dial').knob();

		// Modal controller
		$scope.modalShown = false;
  		$scope.toggleModal = function() {
    		$scope.modalShown = !$scope.modalShown;
  		};

  		// Templates
  		$scope.templates = [
  			{ name: 'Overview', url: 'partials/project/overview.html' },
  			{ name: 'Tasks', url: 'partials/project/tasks.html' },
  			{ name: 'Discussion', url: 'partials/project/discussion.html' },
  			{ name: 'Files', url: 'partials/project/files.html' },
  			{ name: 'Team', url: 'partials/project/team.html' },
  			{ name: 'Settings', url: 'partials/project/settings.html' }
  		];

  		$scope.template = $scope.templates[0];

  		$scope.loadOverview = function () {
  			$scope.template = $scope.templates[0];
  		}

  		$scope.loadTasks = function () {
  			$scope.template = $scope.templates[1];
  		}

  		$scope.loadDiscussion = function () {
  			$scope.template = $scope.templates[2];
  		}

  		$scope.loadFiles = function () {
  			$scope.template = $scope.templates[3];
  		}

  		$scope.loadTeam = function () {
  			$scope.template = $scope.templates[4];
  		}

  		$scope.loadSettings = function () {
  			$scope.template = $scope.templates[5];
  		}
	}])
	.controller('Dashboard', ['$scope', function ($scope) {

	}]);
