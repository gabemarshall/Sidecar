// Prospect (Single-view)
// ************************************************************************
angular.module('sidecar.controllers').controller('Prospect', ['$scope', '$http', function ($scope, $http) {
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
}])