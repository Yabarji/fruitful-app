// // 'use strict';
// //Service for ToDoListApp

// angular.module('fruitfulApp')
// .service('gardenService', function($http, $q) {
//   this.getGardens = function(cb) {
//     $http.get('/api/gardens').then(cb);
//   };
  
//   this.deleteGarden = function(garden) {
//     console.log("I deleted the " + garden.first_name);
//   };
  
//   this.saveGardens = function(gardens) {
//     console.log("I saved a new garden!");
//     var queue = [];
//     gardens.forEach(function(garden){
//     	var request;
//     	if(!garden._id){
//     		request = $http.post('/api/gardens', garden);

//     	}else {
//     		request = $http.put('/api/gardens/' + garden._id, garden).then(function(result){
//     			gardeb = result.data.garden;
//     			// return todo;
//     		});
//     	}
//     	queue.push(request);
//     });
//     //this resolves all promises before returning results
//     return $q.all(queue).then(function(results){
//     	console.log(gardens.length + "many todos were saved");
//     });
//   };
  
// });
