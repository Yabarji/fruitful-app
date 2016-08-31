var db = require('../models');
 
var plantSeed =[
        {	
			plant_type: 'Tomato', 
			plant_variety: 'Cherokee',
			qty_planted: 10,
			est_cost: 30,
			date_planted: '2016-05-25',
			harvest_dates:['2016-09-01', '2016-08-25', '2016-08-15'],
			harvest_qty:[10, 6, 10]
		},
		{	
			plant_type: 'Swiss Chard', 
			plant_variety: 'Rainbow',
			qty_planted: 5,
			est_cost: 3,
			date_planted: '2016-05-26',
			harvest_dates:['2016-05-25', '2016-05-25', '2016-05-25'],
			harvest_qty:[2, 5, 8]
		},
		{	
			plant_type: 'Spinach', 
			plant_variety: 'Dwarf',
			qty_planted: 5,
			est_cost: 3,
			date_planted: '2016-04-26',
			harvest_dates:['2016-05-25', '2016-05-26', '2016-05-27'],
			harvest_qty:[10, 5, 8]
		},
		{	
			plant_type: 'Pepper',
			plant_variety: 'Bell',
			qty_planted: 8,
			est_cost: 20,
			date_planted: '2016-05-26',
			harvest_dates:['2016-08-25', '2016-08-29', '2016-09-01'],
			harvest_qty:[2, 5, 8]
		},
		{	
			plant_type: 'Pepper', 
			plant_variety: 'Jalapeno',
			qty_planted: 7,
			est_cost: 21,
			date_planted: '2016-05-26',
			harvest_dates:['2016-09-01', '2016-09-04', '2016-09-05'],
			harvest_qty:[2, 9, 11]
		},
		{	
			plant_type: 'Cucumber', 
			plant_variety: 'Pickling',
			qty_planted: 4,
			est_cost: 12,
			date_planted: '2016-06-01',
			harvest_dates:['2016-07-30', '2016-08-04', '2016-08-05'],
			harvest_qty:[2, 9, 11]
		}
    ];  

var userSeed = {
    facebook: {
        id: "10101560694417787",
        token: "",
        email: "kayce.danna@gmail.com",
        name: "Kayce Danna",
        photos: "https://scontent.xx.fbcdn.net/v/t1.0-1/p160x160/11709737_10101184563332497_1719156922581032238_n.jpg?oh=9d0495308239b76ffae93aa6fb631b2d&oe=581AB836"
    },
    plants: plantSeed
  };



db.User.remove({}, function(err, user){

	console.log(userSeed);

  db.User.create(userSeed, function(err, user){
    if (err) { return console.log('ERROR', err); }
    console.log("created"+ user + "from seed");
    process.exit();
  });

});

