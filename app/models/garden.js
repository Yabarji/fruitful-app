var mongoose = require('mongoose');

var gardenSchema = new mongoose.Schema({
	frist_name: String,
	last_name: String,
	email: String,
});

var gardenModel = mongoose.model('Garden', gardenSchema);

module.exports = gardenModel;