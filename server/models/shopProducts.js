const mongoose = require('mongoose');
const collection = 'shopProducts'

var ShopProductsSchema = new mongoose.Schema({
	idShop: String,
	products: [{
	    category: String,
	    name    : String,
	    price   : Number,
	    currency: String,
	    units   : String,
	    photoURL: String,
	  }]
  }, { collection })

module.exports = mongoose.model('ShopProducts', ShopProductsSchema);
