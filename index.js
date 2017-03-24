const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
    // const users = require('./server/models/users.js')

const shopProducts = require('./server/models/shopProducts.js')
const shops = require('./server/models/shops.js')
console.log(shopProducts)
    // const userOrders = require('./server/models/userOrders.js')
const PORT = process.env.PORT || 3010
const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/combarrio'
const password = process.env.PASS
const app = express()

mongoose.Promise = global.Promise

app.use(express.static(path.join(__dirname + '/client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect(urlDB)
    .then(db => {
        console.log("success to connect " + urlDB)
    })

app.get('/shops/zipCode/:zipCode', (req, res) => {
    const { zipCode } = req.params
    shops.find({ 'address.zipCode': zipCode })
        .then(shopFind => res.status(200).json(shopFind))
        .catch(errShopFind => res.status(500).json(errShopFind).send(`Shop not found`))
})

app.get('/shops/bussinessType/:bussinessType', (req, res) => {
    const { bussinessType } = req.params
    shops.find({ 'bussinessType': bussinessType })
        .then(shopFind => res.status(200).json(shopFind))
        .catch(errShopFind => res.status(500).json(errShopFind).send(`Shop not found`))
})

app.get('/shop/:id', (req, res) => {
    const { id } = req.params
    shops.findById(id, (error, shop) => {
        shopProducts.populate(shop, { path: "idShopProducts" })
            .then(shopFind => res.status(200).json(shopFind))
            .catch(errShopFind => res.status(500).json(errShopFind).send(`Shop not found`))
    })
})

app.get('/shops/:zipCode/:bussinessType', (req, res) => {
    const { zipCode, bussinessType } = req.params
    shops.find({ 'address.zipCode': zipCode, 'bussinessType': bussinessType })
        .then(shopFind => res.status(200).json(shopFind))
        .catch(errShopFind => res.status(500).json(errShopFind).send(`Shop not found`))
})

app.post('/sendMail', (req, res) => {

    const {shopName, toEmail, listOrder, userName} = req.body
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'combarrio@gmail.com',
            pass: `${password}`
        }
    });
    
    let mailOptions = {
        from: `combarrio@gmail.com`,
        to: `${toEmail}`,
        subject: `${userName}` + ` ha hecho un encargo a ` + `${shopName}`,
        html: `${listOrder}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.redirect("/")
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))
