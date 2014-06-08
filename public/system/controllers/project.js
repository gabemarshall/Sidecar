'use strict';

angular.module('mean.system').controller('EmailsCtrl', ['$scope', function ($scope) {

  // create a emails Object
  $scope.emails = {};

  // pretend data we just got back from the server
  // this is an ARRAY of OBJECTS
  $scope.emails.messages = [{
        "from": "Steve Jobs",
        "subject": "I think I'm holding my phone wrong :/",
        "sent": "2013-10-01T08:05:59Z"
    },{
        "from": "Ellie Goulding",
        "subject": "I've got Starry Eyes, lulz",
        "sent": "2013-09-21T19:45:00Z"
    },{
        "from": "Michael Stipe",
        "subject": "Everybody hurts, sometimes.",
        "sent": "2013-09-12T11:38:30Z"
    },{
        "from": "Jeremy Clarkson",
        "subject": "Think I've found the best car... In the world",
        "sent": "2013-09-03T13:15:11Z"
    }];

	  $scope.deleteEmail = function (index) {
	  	alert(1)
	    $scope.emails.messages.splice(index, 1)
	  };

}]);