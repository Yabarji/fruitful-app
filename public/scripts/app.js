var app = angular.module("fruitfulApp", ['ngRoute'])
console.log('angular is working');


// ROUTES //

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


// CONTROLLERS

mainController.$inject=["$http","$scope"];
function mainController($http, $scope){
  $scope.addGarden = addGarden;
  getGarden();

	function getGarden(){
		$http
		.get('http://localhost:3000/api/gardens')
		.then(function(response){
			console.log(response.data);
			self.all = response.data;
			$scope.gardenData = response.data;
		});
	}

	function addGarden(){
		console.log("checking to see if addGarden is being called");
		$http
		.post('http://localhost:3000/api/gardens')
		.then(function(response){
			console.log("adding a garden");
		});
	}

}