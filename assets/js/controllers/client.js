// Client
// ************************************************************************
angular.module('sidecar.controllers').controller('Client', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  // Templates
  $scope.clientTemplates = [
    { name: 'Overview', url: 'partials/client/overview.html' },
    { name: 'Notes', url: 'partials/client/notes.html' },
    { name: 'Projects', url: 'partials/client/projects.html' },
    { name: 'Documents', url: 'partials/client/documents.html' },
    { name: 'Invoices', url: 'partials/client/invoices.html' }
  ];

  var name = $routeParams.name

  $scope.client = ''
  //$scope.activities = ''

  var clientID

  var ajaxGetClient = function(){
    $http({
      method: 'GET',
      url: '/clients/'+name
    })
    .success(function (data, status, headers, config){
      $scope.client = data;
      $http({
        method: 'GET',
        url: '/clients/activity/'+data.id
      }).success(function(activityData, status, headers,config){
        $scope.client.activities = activityData
      })
      
    })   
  }
  

  ajaxGetClient()

  $scope.clientTemplate = $scope.clientTemplates[0];

  $scope.loadOverview = function () {
    $scope.clientTemplate = $scope.clientTemplates[0];
  }

  $scope.loadNotes = function () {
    $scope.clientTemplate = $scope.clientTemplates[1];
  }

  $scope.loadProjects = function () {
    $scope.clientTemplate = $scope.clientTemplates[2];
  }

  $scope.loadDocuments = function () {
    $scope.clientTemplate = $scope.clientTemplates[3];
  }

  $scope.loadInvoices = function () {
    $scope.clientTemplate = $scope.clientTemplates[4];
  }
}])