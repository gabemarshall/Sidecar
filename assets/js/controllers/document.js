// Document
// ************************************************************************
angular.module('sidecar.controllers').controller('Document', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    // Modal controller
    $scope.modalShown = false;
  
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };

    var name = $routeParams.name;
    $scope.document = '';
 
    var documentName = '';
    var documentID;

    var ajaxGetDocument = function () {
        $http({
            method: 'GET',
            url: '/documents/'+name
        })
        .success(function (data, status, headers, config) {
            $scope.document = data;
            documentName = data.name;
        });
    };

    ajaxGetDocument();
}])