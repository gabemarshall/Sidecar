// Clients
// ************************************************************************
angular.module('sidecar.controllers').controller('Clients', ['$scope', '$http', 'convertDate', function ($scope, $http, convertDate) {
  // Modal controller
  $scope.modalShown = false;
  
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.clients = []
  $scope.clientInfo = {
    name: '',
    address: '',
    city: '',
    state: '',
    contact: '',
    email: '',
    phone: '',
    avatar: '',
    website: '',
    createdAt: ''
  }


  var ajaxGetClients = function(){
    $http({
      method: 'GET',
      url: '/clients'
    })
    .success(function (data, status, headers, config){
     
     // hack, lets improve this later...#TODO
     var i
      for (i=0;i<data.length;i++){
        data[i].createdAt = convertDate.monthDateYear(data[i].createdAt)
      }
      $scope.clients = data
    })
  }
  ajaxGetClients()

  $scope.saveNewClient = function(value){

    $http({
        method: "post",
        url: "/clients/create",
        data: {
            name: this.clientInfo.name,
            address: this.clientInfo.address,
            city: this.clientInfo.city,
            state: this.clientInfo.state,
            contact: this.clientInfo.contact,
            email: this.clientInfo.email,
            phone: this.clientInfo.phone,
            avatar: this.clientInfo.avatar,
            website: this.clientInfo.website
        }
    })
    .success(function(){
      ajaxGetClients()
    })

  }

}])