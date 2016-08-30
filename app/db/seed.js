var db = require('../models');

var userSeed = 
		{ 	first_name: 'Kayce',
			last_name: 'Danna',
			email: 'kayce.danna@gmail.com',
			profile_picture: 'https://avatars2.githubusercontent.com/u/18216073?v=3&s=460'
     	};

var plantsSeed = [
		{	
			plant_type: 'Tomato', 
			plant_variety: 'Cherokee',
			qty_planted: 10,
			date_planted: '2016-05-25',
			harvest_dates:['2016-09-01', '2016-08-25', '2016-08-15'],
			harvest_qty:[10, 6, 10]
		},
		{	
			plant_type: 'Swiss Chard', 
			plant_variety: 'Rainbow',
			qty_planted: 5,
			date_planted: '2016-05-26',
			harvest_dates:['2016-05-25', '2016-05-25', '2016-05-25'],
			harvest_qty:[2, 5, 8]
		},
		{	
			plant_type: 'Spinach', 
			plant_variety: 'Dwarf',
			qty_planted: 5,
			date_planted: '2016-04-26',
			harvest_dates:['2016-05-25', '2016-05-26', '2016-05-27'],
			harvest_qty:[10, 5, 8]
		},
		{	
			plant_type: 'Pepper',
			plant_variety: 'Bell',
			qty_planted: 8,
			date_planted: '2016-05-26',
			harvest_dates:['2016-08-25', '2016-08-29', '2016-09-01'],
			harvest_qty:[2, 5, 8]
		},
		{	
			plant_type: 'Pepper', 
			plant_variety: 'Jalapeno',
			qty_planted: 7,
			date_planted: '2016-05-26',
			harvest_dates:['2016-09-01', '2016-09-04', '2016-09-05'],
			harvest_qty:[2, 9, 11]
		},
		{	
			plant_type: 'Cucumber', 
			plant_variety: 'Pickling',
			qty_planted: 4,
			date_planted: '2016-06-01',
			harvest_dates:['2016-07-30', '2016-08-04', '2016-08-05'],
			harvest_qty:[2, 9, 11]
		}
];

var gardenSeed = {
	user: userSeed,
	plants: plantsSeed,
	comments: ["best ever", "yumm"]
};

db.gardenModel.remove({}, function(err, garden){

  db.gardenModel.create(gardenSeed, function(err, garden){
    if (err) { return console.log('ERROR', err); }
    console.log("created"+ garden + "from seed");
    process.exit();
  });

});

