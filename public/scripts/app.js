var app = angular.module("fruitfulApp", ['ngRoute']);

////////////
// ROUTES //
////////////
app.config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'mainController'
      })
      .when('/garden', { // the "id" parameter 
        templateUrl: 'templates/gardensTemplate.html',
        controller: 'mainController'
      });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});
