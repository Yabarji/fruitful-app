var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var PlantSchema = new Schema ({
	plant_type: String, 
	plant_variety: String,
	qty_planted: Number,
	est_cost: Number,
	date_planted: Date,
	harvest_dates:[Date],
	harvest_qty:[Number]
});

var UserSchema = new Schema({  
    facebook: {
        id: Number,
        token: String,
        email: String,
        name: String,
        photos: String,
    },
     plants: [PlantSchema]
});
 
 

var Plant = mongoose.model('Plant', PlantSchema);
var User = mongoose.model('User', UserSchema);

//Export

module.exports = Plant;
module.exports = User;

