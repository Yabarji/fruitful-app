var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	frist_name: String,
	last_name: String,
	email: String,
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;