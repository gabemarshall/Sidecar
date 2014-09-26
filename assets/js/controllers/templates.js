angular.module('sidecar.controllers').controller('DocumentTemplates', ['$scope', '$http', function ($scope, $http) {
    // Fetch all the templates
    var ajaxGetDocumentTemplates = function () {
        $http({
            method: 'GET',
            url: '/documentTemplate'
        })
        .success(function (data, status, headers, config) {
            $scope.documentTemplates = data
        });
    };

    ajaxGetDocumentTemplates();

    // Create new document template
    $scope.saveNewDocumentTemplate = function (value) {
        var title = this.newDocumentTemplateTitle;

        $http({
            method: "post",
            url: "/documentTemplate/create",
            data: {
                title: title
            }
        })
        .success(function () {
            ajaxGetDocumentTemplates();
        });
    }

    // Hide modals by default
    $scope.templateModalShown = false;

    $scope.toggleTemplateModal = function () {
        $scope.templateModalShown = !$scope.templateModalShown;
    }
}])