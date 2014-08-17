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
    { name: 'Tasks', url: 'partials/project/tasks.html' },
    { name: 'Discussion', url: 'partials/project/discussion.html' },
    { name: 'Files', url: 'partials/project/files.html' },
    { name: 'Details', url: 'partials/project/overview.html' }
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
  
  $scope.checkCompleted = function($task) {
      if ($task.completed){
        return true
      }
  }

// Used to check whether or not the 'completed' list is empty. 
// If empty, we'll put in a default value saying 'drag tasks here'
  $scope.checkForTasksCompleted = function(){
      var count = 0
      var tasks = $scope.project.tasks

      for (i=0;i<tasks.length;i++){
        if (tasks[i].completed){
          count++
        }
        if (count <= 0){
          return true
        }
      }
  }

  $scope.checkForTasksNotCompleted = function(){
      var count = 0
      var tasks = $scope.project.tasks

      for (i=0;i<tasks.length;i++){
        if (!tasks[i].completed){
          count++
        }
        if (count <= 0){
          return true
        }
      }
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

  $scope.loadTasks = function () {
    $scope.template = $scope.templates[0];
  }

  $scope.loadDiscussion = function () {
    $scope.template = $scope.templates[1];
  }

  $scope.loadFiles = function () {
    $scope.template = $scope.templates[2];
  }

  $scope.loadDetails = function () {
    $scope.template = $scope.templates[3];
  }
}])