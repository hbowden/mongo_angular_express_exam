var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/manage', {
            templateUrl: '/views/templates/manage.html',
            controller: 'ManageController'
        })
        .when('/create', {
            templateUrl: '/views/templates/create.html',
            controller: 'CreateController'
        })
        .otherwise({
            redirectTo: '/manage'
        });
}]);
