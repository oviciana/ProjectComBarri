const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Users = require('./models/Users.js')
const Shops = require('./models/Shops.js')
const ShopProducts = require('./models/ShopProducts.js')
const UserOrders = require('./models/UserOrders.js')
const PORT = 3010
const app = express()

// mongoose.Promise = global.Promise

 app.use( express.static( __dirname + '/public' ) )
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.set( 'view engine', 'pug' )

// const urlDB = 'mongodb://localhost:27017/combarrio'
// mongoose.connect(urlDB)

// app.get('/prova', (req,res) => {

// 	res.render('C:/Skylab/ProjectComBarri/views/layout.html')
// })


// app.listen(PORT,() =>	console.log(`listening on port ${PORT}...`)) 