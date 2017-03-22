const mongoose = require('mongoose');
const collection = 'user_orders'

const UserOrdersSchema = new mongoose.Schema({
	idUser: String,
	idShop: String,
	products: [{
		name: String,
		quantity: Number,
	}],
	preparation: String,
}, { collection })

module.exports = mongoose.model('UserOrders', UserOrdersSchema);