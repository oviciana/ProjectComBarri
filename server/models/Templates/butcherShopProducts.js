var ButcherShopTemplateSchema = new mongoose.Schema({
	products: [{
	    category: String,
	    name    : String,
	    price   : Number,
	    currency: String,
	    units   : String,
	    photoURL: String,
	  }]
  }, { collection })

module.exports = mongoose.model('ButcherShopTemplate', ShopSchema);