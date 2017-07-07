var express = require('express'),
router = express.Router(),
User = require('../schema_models/users.js');

router.post('/',function(req,res){
	console.log(req.body)
	var user = new User(req.body.user);
	user.save(function(err,user){
		if(err)
			console.log(err)
		res.json(user);
	})
})

router.get('/',function(req,res){
	User.find(function(err,user){
		if(err)
			console.log(err)
		res.json(user);
	})
})

router.get('/login',function(req,res){
	User.findOne({email: req.body.user.email},function(err,user){
		if(err){
			console.log(err)
			res.send(403)
		}
		else if(user.password === req.body.user.password){
			res.send(200);
		}
		else{
			res.send(403)
		}
	})
})

module.exports = router;