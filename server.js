      // <!-- Node configuration -->
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app     = express();
var router = express.Router();

//requiring the user & garden users
var db = require("./app/models/");


// var db = require('./app/db/db');
// require('./db/seed');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//main home route for the site
app.use('/', express.static('public'));


//API routes

//WORKS. GET route to show all gardens.  "gardenModel" is pulling from the garden.js export
app.get('/api/gardens', function get(req, res){
  db.gardenModel.find({}, function(err, gardens) {
  res.json(gardens);
});
});

//WORKS. GET:id route to SHOW one garden
app.get('/api/gardens/:id', function show(req, res) {
  console.log('requested garden id=', req.params.id);
  db.gardenModel.findOne({_id: req.params.id}, function(err, garden) {
    res.json(garden);
  });
});


//WORKS. POST new garden
app.post('/api/gardens', function create(req, res){
  var newGarden = req.body;
  db.gardenModel.create(newGarden, function (err, garden){
    if(err){
      res.send("error is " + err);
    }
    res.json(garden);
  });
});

//WORKS. DELETE 
app.delete('/api/gardens/:id', function destroy(req, res) {
  console.log('delete id: ', req.params.id);
  db.gardenModel.remove({_id: req.params.id}, function(err) {
    if (err) { return console.log(err); }
    console.log("removal of id=" + req.params.id  + " successful.");
    res.status(200).send();
  });
});

//WORKS. UPDATE
app.put('/api/gardens/:id', function(req, res) {
  var id = req.params.id;
  var garden = req.body;
  console.log(id + garden);

  db.gardenModel.findByIdAndUpdate(id, garden, function(err, garden) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({'garden': garden, message: 'Garden Updated' });
  });
});



app.listen(3000, function(){
	console.log ("server is up");

});
