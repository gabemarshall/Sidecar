// Dial
// ************************************************************************
angular.module('sidecar.controllers').directive('dial', function () {
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