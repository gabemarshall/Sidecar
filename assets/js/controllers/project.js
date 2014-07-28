// Projects
// ************************************************************************
angular.module('sidecar.controllers').controller('Project', ['$scope', '$http', function ($scope, $http) {
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