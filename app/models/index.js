var mongoose = require('mongoose');

//insert heroku stuff

mongoose.connect('mongodb://localhost/fruitful-app', function(err){
	if(err){
		console.log('failed connecting to mongodb');
	}else{
		console.log('successful connection to Mongodb');
	}
});

module.exports.User = require('./user.js');
module.exports.Plant = require('./user.js');
