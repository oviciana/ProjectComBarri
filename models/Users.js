const mongoose = require('mongoose');
const collection = 'users'

const UserSchema = new mongoose.Schema({
	name: String,
	surname: String,
	email: String
}, { collection })

module.exports = mongoose.model('User', UserSchema);