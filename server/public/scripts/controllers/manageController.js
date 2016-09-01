app.controller('ManageController', ['$scope', '$http', function($scope, $http) {

init();

function getHeroes() {
  var promise = $http({
    method: 'GET',
    url: '/heroes'
  }).then(function successCallback(response) {
     return response.data;

  }, function errorCallback(response) {
     console.log("Error: ", response);
     return response;
  });
  return promise;
}

$scope.handleDeleteHero = function(id) {
  deleteHero(id).then(function(res) {
    /* Get all the heroes from the server. */
    getHeroes().then(function(res) {
      $scope.heroes = res;
    });;
  });
}

function deleteHero(id) {
  var promise = $http({
    method: 'DELETE',
    url: '/heroes/' + id,
    data: { id: id },
  }).then(function successCallback(response) {
     console.log("Deleted: ", response.data);
     return response.data;

  }, function errorCallback(response) {
     console.log("Error: ", response);
     return response;
  });
  return promise;
}

function init() {
  $scope.heroes = [];

  /* Get all the heroes from the server. */
  getHeroes().then(function(res) {
    $scope.heroes = res;
  });;
}
}]);
