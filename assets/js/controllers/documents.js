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

    // Create new document
    $scope.saveNewDocument = function (value) {
        var title = this.newDocumentTitle;

        $http({
            method: "post",
            url: "/document/create",
            data: {
                title: title
            }
        })
        .success(function () {
            ajaxGetDocuments();
        });
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
    $scope.modalShown = false;

    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    }
}])