var mongoose = require('mongoose');

//insert heroku stuff

mongoose.connect('mongodb://localhost/fruitful', function(err){
	if(err){
		console.log('failed connecting to mongodb');
	}else{
		console.log('successful connection to Mongodb');
	}
});

module.exports.userModel = require('./garden.js');
module.exports.plantModel = require('./garden.js');
module.exports.gardenModel = require('./garden.js');