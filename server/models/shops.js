const mongoose = require('mongoose');
const collection = 'shops'

var ShopSchema = new mongoose.Schema({
	name: String,
	bussinessType: String,
	address: {
		street : String,
		zipCode: String,
		city   : String,
		coord  : [Number],
	},
	email: String,
	products: [{
    category: String,
    name    : String,
    price   : Number,
    currency: String,
    unit    : String,
    photoURL: String,
  }],

}, { collection })

module.exports = mongoose.model('Shop', ShopSchema);
