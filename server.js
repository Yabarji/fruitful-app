      // <!-- Node configuration -->
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app     = express();
var router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use public folder for frontend
app.use(express.static(__dirname + '/public'));

//requiring the user & garden users
var db = require("./app/models/");


// var db = require('./app/db/db');
// require('./db/seed');

//API routes

//WORKS. GET route to show all users.  "db.User" is pulling from the user.js export
app.get('/api/users', function get(req, res){
  db.User.find({}, function(err, user) {
  res.json(user);
});
});

//WORKS. GET:id route to SHOW one user
app.get('/api/users/:id', function show(req, res) {
  console.log('requested user id=', req.params.id);
  db.User.findOne({_id: req.params.id}, function(err, user) {
    res.json(user);
  });
});


//NOT TESTED. POST new user
app.post('/api/users', function create(req, res){
  var newUser = req.body;
  db.User.create(newUser, function (err, user){
    if(err){
      res.send("error is " + err);
    }
    res.json(user);
  });
});

//WORKS. DELETE 
app.delete('/api/users/:id', function destroy(req, res) {
  console.log('delete id: ', req.params.id);
  db.User.remove({_id: req.params.id}, function(err) {
    if (err) { return console.log(err); }
    console.log("removal of id=" + req.params.id  + " successful.");
    res.status(200).send();
  });
});

//NOT TESTED - UPDATE
app.put('/api/users/:id', function(req, res) {
  var id = req.params.id;
  var user = req.body;
  console.log(id + user);

  db.User.findByIdAndUpdate(id, user, function(err, user) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({'user': user, message: 'User Updated' });
  });
});

app.all('/*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000);

// app.listen(3000, function(){
// 	console.log ("server is up");

// });
