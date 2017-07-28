var mongoose = require('mongoose');
var Address = require('../schema_models/address.js');

module.exports = mongoose.model('customer',{
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	phone: {type: String, required: true},
	address: {type: mongoose.Schema.Types.ObjectId, ref: 'address', required: true},
})