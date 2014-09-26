angular.module('sidecar.controllers').controller('Documents', ['$scope', '$http', function ($scope, $http) {
    // Store partial details
    $scope.documentTemplates = [{
        name: 'Overview',
        url: 'partials/document/overview.html'
    }, {
        name: 'Single',
        url: 'partials/document/single.html'
    }];

    // Default partial view
    $scope.documentTemplate = $scope.documentTemplates[0];

    // Load overview partial view
    $scope.loadOverview = function () {
        $scope.documentTemplate = $scope.documentTemplates[0];
    }

    // Load single document partial view
    $scope.loadSingle = function () {
        $scope.documentTemplate = $scope.documentTemplates[1];
    }

    // Fetch all the documents
    var ajaxGetDocuments = function () {
        $http({
            method: 'GET',
            url: '/document'
        })
        .success(function (data, status, headers, config) {
            $scope.documents = data
        });
    };

    ajaxGetDocuments();

    // Hide modals by default
    $scope.templateModalShown = false;

    $scope.toggleTemplateModal = function () {
        $scope.templateModalShown = !$scope.templateModalShown;
    }
}])