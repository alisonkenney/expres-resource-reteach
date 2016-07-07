var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var candies = [
  {
    "id": 1,
    "name": "Chewing Gum",
    "color": "Red"
  },
  {
    "id": 2,
    "name": "Pez",
    "color": "Green"
  },
  {
    "id": 3,
    "name": "Marshmallow",
    "color": "Pink"
  }
];

var nextId = 1;

//GET all candies
app.get('/candies/', function(req, res) {
  res.send(candies);
});

//GET candies by ID
app.get('/candies/:id', function(req, res) {
  var foundCandy;
  var targetId = parseInt(req.params.id);
  for (var i=0; i < candies.length; i++) {
    if (candies[i].id === targetId) {
      foundCandy = candies[i];
    }
  }
  res.send(foundCandy);
});

//POST new candy
app.post('/candies', function(req, res) {
  var newCandy = req.body;
  if (newCandy.id === undefined) {
    newCandy.id = nextId;
    nextId++;
  }
  candies.push(newCandy);
  console.log(newCandy);
  res.send(newCandy);
});

//Update candies
app.put('/candies/:id', function(req, res) {
  var updateCandy = req.body;
  res.send(updateCandy);
});

//Update candies
app.delete('/candies/:id', function(req, res) {
  var removeCandy = req.body;
  res.send(removeCandy);
});


app.listen(3000);
console.log("Server listening on port 3000");