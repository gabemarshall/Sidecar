// Prospects (Multiple View)
// ************************************************************************
angular.module('sidecar.controllers').controller('Prospects', ['$scope', '$http', function ($scope, $http) {
// Modal controller
$scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}])