var colorBlocks = angular.module('colorBlocks', ['ngRoute']);

colorBlocks.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/play', {
            templateUrl: '/views/templates/gameview.html',
            controller: 'GameController'
        })
        .when('/config', {
            templateUrl: '/views/templates/configview.html',
            controller: 'SettingsController'
        })
        .otherwise({
            redirectTo: '/play'
        });
}]);
