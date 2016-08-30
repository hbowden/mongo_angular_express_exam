colorBlocks.controller('GameController', ['$scope', function($scope) {

console.log('game controller running');
$scope.colors = ['red', 'blue', 'papayawhip'];

// start game
init();

// resets game to the starting state
function init() {
  $scope.messageText = "";
  $scope.currentColor = $scope.colors[randomNumber(0, $scope.colors.length - 1)];
  $scope.colorPrompt = 'Can you find the ' + $scope.currentColor + ' block?'
}

// click handler for guessing colors
$scope.handleInput = function(clickedColor) {
  if(clickedColor === $scope.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    $scope.messageText = 'Oh no! You guessed wrong!';
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
