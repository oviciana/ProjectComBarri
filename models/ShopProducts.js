const mongoose = require('mongoose');
const collection = 'shop_products'

const ShopProductSchema = new mongoose.Schema({
	idUser: String,
	idShop: String,
	product: String,
	quantity: Number,
	preparation: String
}, { collection })

module.exports = mongoose.model('ShopProduct', ShopProductSchema);