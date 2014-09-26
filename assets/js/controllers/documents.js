angular.module('sidecar.controllers').controller('Documents', ['$scope', '$http', function ($scope, $http) {
    $scope.documentTemplates = [{
        name: 'Overview',
        url: 'partials/document/overview.html'
    }, {
        name: 'Single',
        url: 'partials/document/single.html'
    }];

    $scope.documentTemplate = $scope.documentTemplates[0];

    $scope.loadOverview = function () {
        $scope.documentTemplate = $scope.documentTemplates[0];
    }

    $scope.loadSingle = function () {
        $scope.documentTemplate = $scope.documentTemplates[1];
    }

    var ajaxGetDocuments = function () {
        $http({
            method: 'GET',
            url: '/document'
        })
        .success(function (data, status, headers, config) {
            $scope.documents = data
        });
    }

    ajaxGetDocuments();
}])