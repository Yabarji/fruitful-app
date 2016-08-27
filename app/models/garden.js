var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema ({
	first_name: String,
	last_name: String,
	email: String,
	profile_picture: String
});

var plantSchema = new Schema ({
	plant_type: String, 
	plant_variety: String,
	qty_planted: Number,
	date_planted: Date,
	harvest_dates:[Date],
	harvest_qty:[Number]
});

//user and plant are embedded in garden
var gardenSchema = new mongoose.Schema({
	user: userSchema,
	plants: [plantSchema],
	comments: [String]

});


var userModel = mongoose.model('User', userSchema);
var plantModel = mongoose.model('Plant', plantSchema);
var gardenModel = mongoose.model('Garden', gardenSchema);

//Export
module.exports = userModel;
module.exports = plantModel;
module.exports = gardenModel;
