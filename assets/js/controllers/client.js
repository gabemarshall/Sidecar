// Client
// ************************************************************************
angular.module('sidecar.controllers').controller('Client', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    // Modal controller
  $scope.modalShown = false;
  $scope.noteModalShown = false;
  
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.toggleNoteModal = function() {
    $scope.noteModalShown = !$scope.noteModalShown;
  }

  // Templates
  $scope.clientTemplates = [
    { name: 'Overview', url: 'partials/client/overview.html' },
    { name: 'Notes', url: 'partials/client/notes.html' },
    { name: 'Projects', url: 'partials/client/projects.html' },
    { name: 'Documents', url: 'partials/client/documents.html' },
    { name: 'Invoices', url: 'partials/client/invoices.html' }
  ];

  var name = $routeParams.name

  $scope.client = '';
  $scope.clientNotes = '';
 
 // Variable to watch whether or not the client's name changes.. see line 72
  var clientName = '';
  var clientID;

  var ajaxGetClientNotes = function(){
    $http({
      method: 'GET',
      url: '/notes'
    })
    .success(function (data, status, headers, config){
      $scope.clientNotes = data;
    })
  }

  var ajaxGetClient = function(){
    $http({
      method: 'GET',
      url: '/clients/'+name
    })
    .success(function (data, status, headers, config){
      $scope.client = data;
      clientName = data.name;
      
      $http({
        method: 'GET',
        url: '/clients/activity/'+data.id
      }).success(function(activityData, status, headers,config){
        $scope.client.activities = activityData
      })
      
    })   
  }

  ajaxGetClient();
  ajaxGetClientNotes();

  $scope.updateClient = function(){

    var client = $scope.client

    $http({
        method: "post",
        url: "/clients/update",
        data: {
  
            id: client.id,
            name: client.name,
            address: client.address,
            city: client.city,
            state: client.state,
            contact: client.contact,
            email: client.email,
            phone: client.phone,
            avatar: client.avatar,
            website: client.website,
        }
    })
    .success(function(){
      console.log("Client updated")
      // If the client name is changed, refresh the hash to the correct name
      if ($scope.client.name != clientName){
        parent.location.hash = "/clients/"+client.name;
        clientName = $scope.client.name
      }
      else {
        // Client name wasn't changed, do nothing
      }
    })
  }

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