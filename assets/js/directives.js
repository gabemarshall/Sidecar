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
	});
