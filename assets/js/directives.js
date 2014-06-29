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
	});
