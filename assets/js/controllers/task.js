// Tasks
// ************************************************************************
angular.module('sidecar.controllers').controller('Tasks', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
  
  $scope.dialValue1 = 10
  $scope.dialValue2 = 75

  $scope.enableEdit = function() { $scope.edit = true; }
  $scope.disableEdit = function() { $scope.edit = false;  }

  var title = $routeParams.title

  $scope.newTaskTitle = '';
  $scope.project = []

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

  $scope.updateTask = function (index) {
    console.log("updating")
      
      $http({
          method: "post",
          url: "/tasks/update",
          data: {
              id: $scope.project.tasks[index].id
          }
      })
      .success(function(){
        console.log("Task updated")
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