// clickToEdit
// ************************************************************************
angular.module('sidecar.controllers').directive("clickToEdit", function($http, $timeout) {
    var editorTemplate = '<li class="click-to-edit">' +
        '<span ng-hide="view.editorEnabled" ng-click="enableEditor()">{{value}}</span>' +
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
                    element.find('input')[1].focus();
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

                // Ugly hack to update checkbox based on task status

                $scope.value = $scope.view.editableValue;
                $scope.disableEditor();
                $scope.updateTask();
            };
            $scope.toggleStatus = function(){
                if ($scope.status) 
                {
                    $scope.status = false
                } 
                else 
                {
                    $scope.status = true
                }
                $scope.save()
            }
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
