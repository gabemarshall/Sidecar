// Projects
// ************************************************************************
angular.module('sidecar.controllers').controller('Project', ['$scope', '$http', function ($scope, $http) {
  // Edit project modal
	$scope.editProjModalShown = false;
    $scope.editProjToggleModal = function() {
      projectTitle = $scope.project.title
      $scope.editProjModalShown = !$scope.editProjModalShown;
    };
  // Add task modal
  $scope.taskModalShown = false;
    $scope.taskToggleModal = function() {
      $scope.taskModalShown = !$scope.taskModalShown;
    };
  
  var projectTitle = ''
  $scope.projects = []
  $scope.newProjectTitle = ''

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

  $scope.updateProject = function(){

    var project = $scope.project

    $http({
        method: "post",
        url: "/projects/update/"+project.id,
        data: {
            title: project.title,
        }
    })
    .success(function(){
     $scope.editProjModalShown = false;
      // If the project name is changed, refresh the hash to the correct name
      if ($scope.project.title != projectTitle){
        console.log("Project updated, name changed, updating hash")
        parent.location.hash = "/projects/"+project.title
        projectTitle = $scope.project.title
      }
      else {
        console.log("Project updated, no change in title")
        // Project name wasn't changed, do nothing
      }
    })
  }

}])