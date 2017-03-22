const mongoose = require('mongoose');
const collection = 'users'
var UserOrders = mongoose.model('UserOrders');
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
	name: String,
	surname: String,
	email: String,
	userOrders: [{
		idUserOrders: { type: Schema.ObjectId, ref: "UserOrders"},
	}]
}, { collection })

module.exports = mongoose.model('Users', UserSchema);