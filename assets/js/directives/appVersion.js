// appVersion
// ************************************************************************
angular.module('sidecar.controllers').directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}])