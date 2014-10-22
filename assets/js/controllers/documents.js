angular.module('sidecar.controllers').controller('Documents', ['$scope', '$http', function ($scope, $http) {
    // Create new document
    $scope.saveNewDocument = function (value) {
        var title = this.newDocumentTitle;

        $http({
            method: "post",
            url: "/document/create",
            data: {
                name: title
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

    // Fetch all the document types
    var ajaxGetDocumentTypes = function () {
        $http({
            method: 'GET',
            url: '/documentType'
        })
        .success(function (data, status, headers, config) {
            $scope.types = data
        });
    };

    ajaxGetDocuments();
    ajaxGetDocumentTypes();

    // Hide modals by default
    $scope.modalShown = false;

    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    }
}])