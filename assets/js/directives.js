'use strict';

/* Directives */

angular.module('sidecar.directives', []).
	directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])
	.directive('modalDialog', function() {
	  return {
	    restrict: 'E',
	    scope: {
	      show: '='
	    },
	    replace: true, // Replace with the template below
	    transclude: true, // we want to insert custom content inside the directive
	    link: function(scope, element, attrs) {
	      scope.dialogStyle = {};
	      if (attrs.width)
	        scope.dialogStyle.width = attrs.width;
	      if (attrs.height)
	        scope.dialogStyle.height = attrs.height;
	      scope.hideModal = function() {
	        scope.show = false;
	      };
	    },
	    templateUrl: 'partials/modal.html' // See below
	  };
	})

	.directive('subNav', function () {
		return {
			restrict: 'A',

			link: function (scope, element) {
				var $anchor = element.find('a');

				$anchor.on('click', function () {
					var $this = $(this);

					$anchor.removeClass('selected');
					$this.addClass('selected');
				})
			}
		}
	})
	.directive('dial', function () {
		return {
			restrict: 'E',
		    scope: {
		      dialValue: '='
		    },
			template: '<input type="text" value="{{dialValue}}" data-width="180" data-thickness="0.125" \
			data-fgColor="#428bca" data-readOnly=true class="dial">',
			link: function (scope, element) {
				var input = element.find("input")[0];
				setTimeout(function(){
					$(input).knob()
				},0);
			}
		}
	})
    .directive("clickToEdit", function($http, $timeout) {
    var editorTemplate = '<section class="click-to-edit">' +
            '<input type="checkbox" ng-checked="{{status}}" ng-click="save()" name="vehicle" value="Car"><span ng-hide="view.editorEnabled" ng-click="enableEditor()">{{value}}</span>' +
            '<input ng-keypress="watchKeys($event)" ng-show="view.editorEnabled" ng-model="view.editableValue" ng-blur="save()">' +
    '</section>';

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

            $scope.watchKeys = function(event){
            	if (event.which == 13){
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
            	if ($scope.status)
            	{
            		$scope.status = false
            	}
            	else 
            	{
            		$scope.status = true
            	}

                $scope.value = $scope.view.editableValue;
                $scope.disableEditor();
                $scope.updateTask();
            };
	        $scope.updateTask = function (index) {

	          $http({
	              method: "post",
	              url: "/tasks/update/" + $scope.attr,
	              data: {
	                  title: $scope.value,
	                  completed: $scope.status
	              }
	          })
	          .success(function(){
	            console.log("Task updated")

	          })
	        };
        }
    };
});


