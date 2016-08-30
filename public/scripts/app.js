var app = angular.module("fruitfulApp", ['ngRoute']);
console.log('angular is working');


// ROUTES //

app.controller('mainController', mainController)
.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'mainController'
      })
      .when('/gardens', { // the "id" parameter 
        templateUrl: 'templates/gardensTemplate.html',
        controller: 'mainController'
      })
      .otherwise({redirectTo: '/'});
  $locationProvider.html5Mode({
  	enabled: true,
  	requireBase: false
	});
}]);


// CONTROLLERS

mainController.$inject=["$http","$scope", "$routeParams"];
function mainController($http, $scope, $routeParams){
  $scope.addGarden = addGarden; 
  $scope.newGarden = {};
  $scope.deletePlant = deletePlant;
  $scope.chart = chart;

  getGarden();

	function getGarden(){
		$http
		.get('http://localhost:3000/api/gardens')
		.then(function(response){
			console.log(response.data);
			$scope.gardenData = response.data;
			console.log("HERE "+ $scope.gardenData);
		});
	}

	function addGarden(){
		console.log("self.newGarden = " + $scope.newGarden);
		$http
		.post('http://localhost:3000/api/gardens', $scope.newGarden)
		.then(function(response){
			$scope.newGarden = {};
			console.log("adding a garden");
			getGarden();
		});
	}

	function deletePlant(id){
		console.log("Delete params:" + id);
		$http
		.delete("http://localhost:3000/api/gardens/" + id)
		.then(function(response){
			console.log('deleted a plant');
		});
	}

	function chart(){

	  var ctx = document.getElementById("garden-chart");
	  console.log(ctx);
	  organicChart = new Chart(ctx, {
	    type: 'pie',
	    data: {
	        labels: ['tomato', 'spinach', 'kale', 'swiss chard', 'pepper', 'cucumber'],

	        datasets: [
	        	{
	        	label: 'Veggies',
	          	data: [6, 10, 15, 20, 16, 15],
	            backgroundColor: [
	                '#DEE4E0',
	                '#FBBDA8',
	                '#79C6B2',
	                '#A8BDDC',
	                '#FE4B6B',
	                '#963760'
	            ],
	            borderColor: [
	            	'#DEE4E0',
	                '#FBBDA8',
	                '#79C6B2',
	                '#A8BDDC',
	                '#FE4B6B',
	                '#963760'
	            
	            ],
	            borderWidth: 1

	           }
	        ]
	    },
	    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

	});
	}
}