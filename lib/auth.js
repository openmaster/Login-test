var passport = require('passport');
var localStrategy = require('passport-local').Strategy;


user = {id: '1243', firstName: 'rocky', lastName: 'singh', phoneNumber: '9055463214', username:'rocky', password:'admin'};

function findOne(username, password, done){
	console.log('hitting findOne');
	return done(null, user);
}

passport.use(new localStrategy(
  function(username, password, done) {
  	findOne(username, password, function(err, result) {
  	  if(err) {
  	  	return done(null, false);
  	  } else {
        console.log('user found');
  	  	return done(null, result);
  	  }
    })
  }
));

passport.serializeUser(function(user, done){
	return done(null, user.id);
})

passport.deserializeUser(function(user, done){
	return done(null, user);
})

module.exports = passport;