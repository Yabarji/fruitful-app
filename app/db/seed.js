var db = require('../models');

var user = [
		{ 	first_name: 'Kayce',
			last_name: 'Danna',
			email: 'kayce.danna@gmail.com',
			profile_picture: 'https://avatars2.githubusercontent.com/u/18216073?v=3&s=460'
     	}];

var plants = [
		{	
			plant_type: 'Tomato', 
			plant_variety: 'Cherokee',
			qty_planted: 10,
			date_planted: '2016',
			harvest_dates:[Date],
			harvest_qty:[Number]
		}
];