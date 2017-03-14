const mongoose = require('mongoose');
const collection = 'user_orders'

const UserOrderSchema = new mongoose.Schema({
	idUser: String,
	idShop: String,
	product: String,
	quantity: Number,
	preparation: String
}, { collection })

module.exports = mongoose.model('UserOrder', UserOrderSchema);