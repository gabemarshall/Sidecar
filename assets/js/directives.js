'use strict';

/* Directives */

angular.module('sidecar.directives', []).
	directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])
	.directive('radialProgress', function() {
  		return function(scope, element) {
    		$('.dial').knob();
   		};
  	});
