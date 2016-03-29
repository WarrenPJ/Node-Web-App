var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork = [];
  var myArtist = [];
  myArtist = appdata.speakers;
  appdata.speakers.forEach(function(item){
  	myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', { 
  	title: 'Home',
  	artwork: myArtwork,
  	artists: myArtist,
  	page: 'home'
  });
});

/* GET speakers page. */
router.get('/speakers', function(req, res, next) {
  var myArtwork = [];
  var myArtist = [];
  myArtist = appdata.speakers;
  appdata.speakers.forEach(function(item){
  	myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('speakers', { 
  	title: 'Speakers',
  	artwork: myArtwork,
  	artists: myArtist,
  	page: 'artistList'
  });
});

/* GET speakersID page. */
router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtwork = [];
  var myArtist = [];
  appdata.speakers.forEach(function(item){
  	if(item.shortname == req.params.speakerid) {
  		myArtist.push(item);
  		 myArtwork = myArtwork.concat(item.artwork);
  	}
  });
  res.render('speakers', { 
  	title: 'Speakers',
  	artwork: myArtwork,
  	artists: myArtist,
  	page: 'artistDetail'
  });
});

module.exports = router;
