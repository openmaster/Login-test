var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}))

var passport = require('./auth');
app.use(passport.initialize());

app.get('/test', (req, res) => res.send('Hello World!'));

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
	})

//app.get('/login', passport.authenticate('local', {failureRedirect: '/'}), function(req, res){
//	res.redirect('/test');
//})

app.post('/login',
  passport.authenticate('local', {failureRedirect: '/'}), function (req, res) {
  	console.log(req.user);
  	res.send(req.user);
  }
);

module.exports = app;