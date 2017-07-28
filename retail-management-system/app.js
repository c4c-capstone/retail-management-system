// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();


// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('bower_components'))
app.use(express.static('public'))		//
app.use(function(req,res,next){
	console.log('something happened');
	next();
})

var port     = process.env.PORT || 8080; // set our port
// CONNECT TO DB
//==============================================================================
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/c4c_capstone');
var customer = require('./routes/users_r.js');
app.use('/customer', customer);
app.get('/', function(req, res){
//	res.json({msg:'test'});
	res.sendFile('./public/index.html')
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);