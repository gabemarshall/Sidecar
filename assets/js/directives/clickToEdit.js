// clickToEdit
// ************************************************************************
angular.module('sidecar.controllers').directive("clickToEdit", function($http, $timeout) {
    var editorTemplate = '<li id="{{status}}" class="click-to-edit">' +
        '<span drop="handleDrop()" ng-hide="view.editorEnabled" ng-click="enableEditor()">{{value}}</span>' +
        '<input ng-keypress="watchKeys($event)" ng-show="view.editorEnabled" ng-model="view.editableValue" ng-blur="save()">' +
        '</li>';

    return {
        restrict: "EA",
        replace: true,
        transclude: true,
        scope: {
            value: "=clickToEdit",
            attr: "=taskId",
            status: "=statusBool"
        },
        template: editorTemplate,
        link: function(scope, element, attrs) {

            element.bind('click', function() {
                $timeout(function() {
                    element.find('input')[0].focus();
                });
            });

        },
        controller: function($scope) {
            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false
            };

            $scope.watchKeys = function(event) {
                if (event.which == 13) {
                    $scope.disableEditor()
                }
            }

            $scope.enableEditor = function() {
                $scope.view.editorEnabled = true;
                $scope.view.editableValue = $scope.value;
            };

            $scope.disableEditor = function() {
                $scope.view.editorEnabled = false;
            };

            $scope.save = function() {
                $scope.value = $scope.view.editableValue;
                $scope.disableEditor();
                $scope.updateTask();
            };
            $scope.updateTask = function(index) {

                $http({
                    method: "post",
                    url: "/tasks/update/" + $scope.attr,
                    data: {
                        title: $scope.value,
                        completed: $scope.status
                    }
                })
                .success(function() {
                    console.log("Task updated")
                })
            };
        }
    };
});
