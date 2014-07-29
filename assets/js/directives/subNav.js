// subNav
// ************************************************************************
angular.module('sidecar.controllers').directive('subNav', function () {
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