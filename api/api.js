// BASE SETUP
// =============================================================================

var express = require('express');   // call express
var app = express();   // define our app using express
var bodyParser = require('body-parser');  // define our app using express
var mongoose = require('mongoose');
var User = require('./models/User.js');
var Profile = require('./models/Profile.js');

var jwt = require('jwt-simple');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Handle CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();          // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function (req, res) {
  res.json({message: 'hooray! welcome to our api!'});
});
// more routes for our API will happen here

// on routes that end in /profiles
// ----------------------------------------------------
router.route('/profiles')
  // create a profile (accessed at POST http://localhost:3000/api/profiles)
  .post(function (req, res) {
    var profile = new Profile();      // create a new instance of the Profile model
    profile.name = req.body.name;  // set the profiles name (comes from the request)
    profile.userid = req.body.userid;
    profile.username = req.body.username;
    profile.alternate_emails = req.body.alternate_emails;
    profile.biography= req.body.biography;
    profile.cellphone = req.body.cellphone;
    profile.currentcity = req.body.currentcity;
    profile.currentcountry = req.body.currentcountry;
    profile.email = req.body.email;
    profile.firstname = req.body.firstname;
    profile.gender = req.body.gender;
    profile.homecountry = req.body.homecountry;
    profile.hometown = req.body.hometown;
    profile.imageurl = req.body.imageurl;
    profile.interests = req.body.interests;
    profile.work = req.body.work;
    profile.education = req.body.education;
    profile.car = req.body.car;

    // save the profile and check for errors
    profile.save(function (err) {
      if (!err){
        console.log("Created");

      }else{
        return console.log(err);

      }
      return res.send(profile);
      //
      //res.json(profile);

      //
      //res.status(200).send({
      //  profile: Profile.toJSON()
      //});
    });

  })

// get all the profiles (accessed at GET http://localhost:3000/api/profiles)
.get(function(req, res) {
  Profile.find(function(err, profiles) {
    if (err)
      res.send(err);

    res.json(profiles);
  });
});
// on routes that end in /profiles/:profile_id
// ----------------------------------------------------
router.route('/profiles/:profile_id')

  // get the profile with that id (accessed at GET http://localhost:8080/api/profiles/:profile_id)
  .get(function(req, res) {
    Profile.findById(req.params.profile_id, function(err, profile) {
      if (err)
        res.send(err);
      res.json(profile);
    });
  })

  // update the profile with this id (accessed at PUT http://localhost:8080/api/profiles/:profile_id)
  .put(function(req, res) {

    // use our profile model to find the profile we want
    Profile.findById(req.params.profile_id, function(err, profile) {

      if (err)
        res.send(err);

      profile.name = req.body.name;  // update the profiles info

      // save the profile
      profile.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Profile updated!' });
      });

    });
  })
  // delete the profile with this id (accessed at DELETE http://localhost:8080/api/profiles/:profile_id)
  .delete(function(req, res) {
    Profile.remove({
      _id: req.params.profile_id
    }, function(err, profile) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });





router.post('/register', function (req, res) {
  var user = req.body;

  var newUser = new User.model({
    email: user.email,
    password: user.password
  })
  var payload = {
    iss: req.hostname,
    sub: newUser.id
  }

  var token = jwt.encode(payload, "shhh");
  newUser.save(function (err) {
    res.status(200).send({
      user: newUser.toJSON(),
      token: token
    });
  })

})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/api', router);


router.post('/register', function (req, res) {
  var user = req.body;

  var newUser = new User.model({
    email: user.email,
    password: user.password
  })
  var payload = {
    iss: req.hostname,
    sub: newUser.id
  }

  var token = jwt.encode(payload, "shhh");
  newUser.save(function (err) {
    res.status(200).send({
      user: newUser.toJSON(),
      token: token
    });
  })

})
var status = [
  'i am happy',
  'making progress',
  'who are you'


];


app.get('/status', function (req, res) {
  var token = req.headers.authorization.split('')[1];
  var payload = jwt.decode(token, "shhh")
  if (!payload.sub) {
    res.status(401).send({
      message: 'Authentication failed'
    });
  }
  if (!req.headers.authorization) {
    return res.status(401).send({
      message: 'you are not authorized'
    });
  }

  res.json(status);

})

mongoose.connect('mongodb://localhost/yookore');


var server = app.listen(3000, function () {
  console.log('api listening on', server.address().port);
})
