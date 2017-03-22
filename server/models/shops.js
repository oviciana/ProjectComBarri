const mongoose = require('mongoose');
const collection = 'shops'
var ShopProducts = mongoose.model('ShopProducts');
const Schema = mongoose.Schema

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
	openHours: String,
	acceptOrders: String,
	idShopProducts: { type: Schema.ObjectId, ref: "ShopProducts"},
}, { collection })

module.exports = mongoose.model('Shops', ShopSchema);
