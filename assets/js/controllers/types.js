angular.module('sidecar.controllers').controller('DocumentTypes', ['$scope', '$http', function ($scope, $http) {
    // Fetch all the templates
    var ajaxGetDocumentTypes = function () {
        $http({
            method: 'GET',
            url: '/documentType'
        })
        .success(function (data, status, headers, config) {
            $scope.documentTypes = data
        });
    };

    ajaxGetDocumentTypes();

    // Create new document template
    $scope.saveNewDocumentType = function (value) {
        var title = this.newDocumentTypeTitle;

        $http({
            method: "post",
            url: "/documentType/create",
            data: {
                title: title
            }
        })
        .success(function () {
            ajaxGetDocumentTypes();
        });
    }

    // Hide modals by default
    $scope.typeModalShown = false;

    $scope.toggleTypeModal = function () {
        $scope.typeModalShown = !$scope.typeModalShown;
    }
}])