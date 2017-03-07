const mongoose = require('mongoose');
const collection = 'shops'

const ShopSchema = new mongoose.Schema({
	name: String,
	address: String,
	zipCode: String,
	category: String,
	email: String
}, { collection })

module.exports = mongoose.model('Shop', ShopSchema);