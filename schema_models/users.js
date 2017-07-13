var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
	name :{type: String, required: true},
	password: {type: String, required: true},
	email : {type: String, required: true},
	role : {type: String, default: 'user'}
})