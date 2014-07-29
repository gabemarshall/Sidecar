angular.module('sidecar.controllers').controller('Documents', ['$scope', function($scope) {
  $scope.documentTemplates = [{
    name: 'Overview',
    url: 'partials/document/overview.html'
  }, {
    name: 'Single',
    url: 'partials/document/single.html'
  }];

  $scope.documentTemplate = $scope.documentTemplates[0];

  $scope.loadOverview = function(){
    $scope.documentTemplate = $scope.documentTemplates[0];
  }

  $scope.loadSingle = function() {
    $scope.documentTemplate = $scope.documentTemplates[1];
  }

}])