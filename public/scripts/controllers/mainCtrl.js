
app.controller('mainController', mainController);


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


mainController.$inject=["$http","$scope", "$routeParams"];

function mainController($http, $scope, $routeParams){
  $scope.addGarden = addGarden; 
  $scope.newGarden = {};
  $scope.deletePlant = deletePlant;
  $scope.chart = chart;
  $scope.plantTypes = [];
  $scope.plantQty = [];

  getGarden();
  findPlantTypes();

	function getGarden(){
		$http
		.get("https://fruitful-app.herokuapp.com/api/users")
		// .get('http://localhost:3000/api/users')
		.then(function(response){
			// console.log(response.data);
			$scope.gardenData = response.data;
		});
	}

	function addGarden(){
		console.log("self.newGarden = " + $scope.newGarden);
		$http
		.post('https://fruitful-app.herokuapp.com/api/users', $scope.newGarden)
		// .post('http://localhost:3000/api/users', $scope.newGarden)
		.then(function(response){
			$scope.newGarden = {};
			console.log("adding a garden");
			getGarden();
		});
	}

	function deletePlant(id){
		console.log("Delete params:" + id);
		$http
		.delete("https://fruitful-app.herokuapp.com/api/users/" + id)
		// .delete("http://localhost:3000/api/users/" + id)
		.then(function(response){	
			console.log('deleted a plant');
			getGarden();	
		});
	}

	function findPlantTypes(){
		$http
		.get("https://fruitful-app.herokuapp.com/api/users")
		// .get('http://localhost:3000/api/users')
		.then(function(response){
			console.log(response.data[0]);
			$scope.plantData = response.data[0].plants;		
			var plants = $scope.plantData;
		for(i = 0; i < plants.length; i++){
			console.log(plants[i].plant_type);
			$scope.plantTypes.push(plants[i].plant_type);
			$scope.plantQty.push(plants[i].qty_planted);
		}
			chart();
		});
	}

	function chart(){

	  var ctx = document.getElementById("garden-chart");
	  console.log(ctx);
	  organicChart = new Chart(ctx, {
	    type: 'pie',
	    data: {
	        labels: $scope.plantTypes,
	        		
	        datasets: [
	        	{
	        	label: 'Veggies',
	          	data:  $scope.plantQty,
	            backgroundColor: [
	                '#DEE4E0',
	                '#FBBDA8',
	                '#79C6B2',
	                '#A8BDDC',
	                '#FE4B6B',
	                '#963760'
	            ],
	            borderColor: "#4d4d4d",
	            borderWidth: 1
	           }
	        ]
	    },
	    options: {
	    fontFamily: "Merriweather",
	    fontColor: "black",
	    title: {
            display: true,
            text: "Currently Growing",
            fontSize: 20,
            fontFamily: "Merriweather",
            fontColor: "black",
        },
      }
	});
	}
}








