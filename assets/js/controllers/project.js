// Projects
// ************************************************************************
angular.module('sidecar.controllers').controller('Project', ['$scope', '$http', function ($scope, $http) {
	
  // Edit project modal
	$scope.editProjModalShown = false;
    $scope.editProjToggleModal = function() {
      $scope.editProjModalShown = !$scope.editProjModalShown;
    };

  // Add task modal
  $scope.taskModalShown = false;
    $scope.taskToggleModal = function() {
      $scope.taskModalShown = !$scope.taskModalShown;
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