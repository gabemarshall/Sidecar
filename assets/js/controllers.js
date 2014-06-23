'use strict';

/* Controllers */
angular.module('sidecar.controllers', [])
	.controller('Nav', ['$scope', '$location', function ($scope, $location) {
		$scope.$location = $location;
	}])
	.controller('Project', ['$scope', '$http', function ($scope, $http) {
		// Modal controller
		$scope.modalShown = false;
  		$scope.toggleModal = function() {
    		$scope.modalShown = !$scope.modalShown;
  		};
    $scope.projects = []
    $scope.newProjectTitle = '';

    var ajaxGetProjects = function(){
      $http({
        method: 'GET',
        url: '/projects'
      })
      .success(function (data, status, headers, config){
        $scope.projects = data
      })
    }
    ajaxGetProjects()

    $scope.saveNewProject = function(value){
      var title = this.newProjectTitle

      $http({
          method: "post",
          url: "/projects/create",
          data: {
              title: title
          }
      })
      .success(function(){
        ajaxGetProjects()
      })

    }
	}])
  .controller('Clients', ['$scope', function ($scope) {
    // Modal controller
    $scope.modalShown = false;
      $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
      };
  }])
	.controller('Tasks', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
		$('.dial').knob();
    
    var title = $routeParams.title
  
    $scope.newTaskTitle = '';
    $scope.project = []

    var ajaxGetTasks = function(){
      $http({
        method: 'GET',
        url: '/projects/'+title
      })
      .success(function (data, status, headers, config){
        $scope.project = data;
      })   
    }
    

    ajaxGetTasks()

    
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

      $scope.saveNewTask = function(value){
        var title = this.newTaskTitle


        
        $http({
            method: "post",
            url: "/tasks/create",
            data: {
                title: title,
                project: $scope.project.id
            }
        })
        .success(function(){
          ajaxGetTasks()
        })

      }

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
  .controller('Client', ['$scope', function ($scope) {
    // Templates
    $scope.clientTemplates = [
      { name: 'Overview', url: 'partials/client/overview.html' },
      { name: 'Notes', url: 'partials/client/notes.html' },
      { name: 'Projects', url: 'partials/client/projects.html' },
      { name: 'Documents', url: 'partials/client/documents.html' },
      { name: 'Invoices', url: 'partials/client/invoices.html' }
    ];

    $scope.clientTemplate = $scope.clientTemplates[0];

    $scope.loadOverview = function () {
      $scope.clientTemplate = $scope.clientTemplates[0];
    }

    $scope.loadNotes = function () {
      $scope.clientTemplate = $scope.clientTemplates[1];
    }

    $scope.loadProjects = function () {
      $scope.clientTemplate = $scope.clientTemplates[2];
    }

    $scope.loadDocuments = function () {
      $scope.clientTemplate = $scope.clientTemplates[3];
    }

    $scope.loadInvoices = function () {
      $scope.clientTemplate = $scope.clientTemplates[4];
    }
  }])
	.controller('Dashboard', ['$scope', function ($scope) {

	}]);
