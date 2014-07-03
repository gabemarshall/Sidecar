'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('sidecar.services', []).
	value('version', '0.1')

.service('convertDate', function () {
  this.monthDateYear = function (date) {
    var d = new Date(date)
    var month = d.getUTCMonth();
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();

    var result = month + "/" + day + "/" + year;
    return result
  };
});