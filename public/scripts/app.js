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
  $scope.newGarden = {};
  

  getGarden();

	function getGarden(){
		$http
		.get('http://localhost:3000/api/gardens')
		.then(function(response){
			console.log(response.data);
			$scope.gardenData = response.data;
		});
	}

	function addGarden(){
		console.log("self.newGarden = " + $scope.newGarden);
		$http
		.post('http://localhost:3000/api/gardens', $scope.newGarden)
		.then(function(response){
			console.log("adding a garden");
			getGarden();
		});
	}
}