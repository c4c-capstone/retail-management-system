var express = require('express'),
router = express.Router(),
Customer = require('../schema_models/customer.js'),
Address = require('../schema_models/address.js');

router.post('/',function(req,res){

	Customer.findOne({email:req.body.customer.email}, function(err, customer){
		if(err)
			console.log(err);
		if(customer)
			res.json({error:'email exists'});
		if(!err && !customer){
			customer = req.body.customer;
		new Address(customer.address)
			.save()
			.then(function(address){
				customer.address = address;
				return new Customer(customer).save();
			})
			.then(function(customer){
				res.json(customer);
			})
			.catch(function(err){
				console.log(err);
			});

	}
  });
});

router.get('/',function(req,res){
	Customer
		.find()
		.populate('address')
		.exec()
		.then(function(cust){
			res.json(cust);
		})
		.catch(function(err){
			console.log(err);
		});
});

router.post('/login',function(req,res){
	console.log(req.body);
	Customer
		.findOne({email: req.body.email})
		.populate('address')
		.exec()
		.then(function(cust){
<<<<<<< HEAD
			console.log(cust);
=======
			console.log(cust)
>>>>>>> upstream/loginLogout
			if(cust.password === req.body.password){
				res.json(cust);
			}
			else{
				console.log('Seriously');
				res.sendStatus(403);
			}
		})
		.catch(function(err){
			console.log(err);
			console.log('Seriously Bro');
			res.sendStatus(403);
		});
});

module.exports = router;
