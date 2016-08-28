var app = angular.module("fruitfulApp", ['ngRoute']);

////////////
// ROUTES //
////////////
app.controller('mainController', mainController)
.config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'mainController'
      })
      .when('/gardens', { // the "id" parameter 
        templateUrl: 'templates/gardensTemplate.html',
        controller: 'mainController'
      });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});



mainController.$inject=["$http","$scope"];
function mainController($http, $scope){
	
	function getGardens(){
		$http
		.get('http://localhost:3000/api/gardens')
		.then(function(response){
			console.log(response.data);
			$scope.gardenData = response.data;
		});
	}
	getGardens();
}