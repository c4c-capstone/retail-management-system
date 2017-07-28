var mongoose = require('mongoose');

module.exports = mongoose.model('address',{
	street: {type: String, required: true},
	apt: {type: String, required: false},
	city: {type: String, required: true},
	state: {type: String, required: true},
	zip: {type: String, required: true}
})