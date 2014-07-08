'use strict';

/* Controllers */
angular.module('sidecar.controllers', [])
	.controller('Nav', ['$scope', '$location', function ($scope, $location) {
		$scope.$location = $location;
	}])

// Projects
// ************************************************************************
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

// Tasks
// ************************************************************************
  .controller('Tasks', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    
      // setTimeout(function(){
      //   $('.dial').knob();
      // }, 25)
    $scope.dialValue1 = 10
    $scope.dialValue2 = 75

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
      $scope.deleteTask = function (index) {

          
          $http({
              method: "post",
              url: "/tasks/delete",
              data: {
                  id: $scope.project.tasks[index].id
              }
          })
          .success(function(){
            $scope.project.tasks.splice(index, 1)
          })
      };

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

// Clients
// ************************************************************************
  .controller('Clients', ['$scope', '$http', 'convertDate', function ($scope, $http, convertDate) {
    // Modal controller
    $scope.modalShown = false;
      $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
      };

    $scope.clients = []
    $scope.clientInfo = {
      name: '',
      address: '',
      city: '',
      state: '',
      contact: '',
      email: '',
      phone: '',
      avatar: '',
      website: '',
      createdAt: ''
    }


    var ajaxGetClients = function(){
      $http({
        method: 'GET',
        url: '/clients'
      })
      .success(function (data, status, headers, config){
       
       // hack, lets improve this later...#TODO
       var i
        for (i=0;i<data.length;i++){
          data[i].createdAt = convertDate.monthDateYear(data[i].createdAt)
        }
        $scope.clients = data
      })
    }
    ajaxGetClients()

    $scope.saveNewClient = function(value){

      $http({
          method: "post",
          url: "/clients/create",
          data: {
              name: this.clientInfo.name,
              address: this.clientInfo.address,
              city: this.clientInfo.city,
              state: this.clientInfo.state,
              contact: this.clientInfo.contact,
              email: this.clientInfo.email,
              phone: this.clientInfo.phone,
              avatar: this.clientInfo.avatar,
              website: this.clientInfo.website
          }
      })
      .success(function(){
        ajaxGetClients()
      })

    }

  }])

// Client
// ************************************************************************
  .controller('Client', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    // Templates
    $scope.clientTemplates = [
      { name: 'Overview', url: 'partials/client/overview.html' },
      { name: 'Notes', url: 'partials/client/notes.html' },
      { name: 'Projects', url: 'partials/client/projects.html' },
      { name: 'Documents', url: 'partials/client/documents.html' },
      { name: 'Invoices', url: 'partials/client/invoices.html' }
    ];

    var name = $routeParams.name
  
    $scope.client = ''

    var ajaxGetClient = function(){
      $http({
        method: 'GET',
        url: '/clients/'+name
      })
      .success(function (data, status, headers, config){
        $scope.client = data;
      })   
    }
    

    ajaxGetClient()

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

// Dashboard
// ************************************************************************
	.controller('Dashboard', ['$scope', function ($scope) {

	}])

// Prospects
// ************************************************************************
  .controller('Prospects', ['$scope', '$http', function ($scope, $http) {
    // Modal controller
    $scope.modalShown = false;
      $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
      };
  }])

// Prospect
// ************************************************************************
  .controller('Prospect', ['$scope', '$http', function ($scope, $http) {
    // Record Interaction Modal controller
    $scope.recordModalShown = false;
      $scope.recordToggleModal = function() {
        $scope.recordModalShown = !$scope.recordModalShown;
      };

      // Edit Interaction Modal controller
    $scope.editModalShown = false;
      $scope.editToggleModal = function() {
        $scope.editModalShown = !$scope.editModalShown;
      };
  }]);
