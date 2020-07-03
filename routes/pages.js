var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
  res.render('home');
});

// Adwarps
router.get('/adwarps', function(req, res){
  res.render('adwarps');
});

// Duplicates
router.get('/duplicates', function(req, res){
  res.render('duplicates');
});

// Contact
router.get('/gauntlet', function(req, res){
  res.render('gauntlet');
});

module.exports = router;