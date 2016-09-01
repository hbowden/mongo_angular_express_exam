app.controller('CreateController', ['$scope', '$http', function($scope, $http) {
  function createHeroe(hero) {
    var promise = $http({
      method: 'POST',
      url: '/heroes',
      data: hero
    }).then(function successCallback(response) {
       return response.data;

    }, function errorCallback(response) {
       console.log("Error: ", response);
       return response;
    });
    return promise;
  }

  $scope.handleAddHero = function(hero) {
    createHeroe(hero).then(function(res) {
      // Set input fields back to blank.
      $scope.hero = {};
    });
  }
}]);
