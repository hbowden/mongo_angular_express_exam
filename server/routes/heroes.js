var express = require('express');
var router = express.Router();
var Heroes = require('../models/heroes');

router.get('/', function(req, res) {
  Heroes.find({}, function(err, heroes) {
    if(err) {
      console.log("Can't find heroes! ", err);
      res.sendStatus(500);
      return;
    }
    res.send(heroes);
  });
});

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  Heroes.findById(id, function(err, hero) {
  if(err) {
    console.log("Can't find hero: ", err);
    res.sendStatus(500);
    return;
  }

  hero.remove(function(err) {
    if(err) {
      console.log("Can't delete user: ", err);
      res.sendStatus(500);
      return;
    }
  });

});
  res.sendStatus(200);
});

router.post('/', function(req, res) {
  var hero = req.body;

  var newHero = Heroes({
    firstName: hero.firstName,
    lastName: hero.lastName,
    alias: hero.alias,
    city: hero.city,
    power: hero.power
  });

  newHero.save(function(err) {
    if(err) {
      console.log("Error creating user: ", err);
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

router.put('/', function(req, res) {

});

module.exports = router;
