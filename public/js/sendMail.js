const nodemailer = require('nodemailer');
console.log("pulsado click en enviar correo")
    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'combarrio@gmail.com',
        pass: '+++++++++++'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'combarrio@gmail.com', // sender address
    to: '++++++@gmail.com, ++++++@gmail.com', // list of receivers
    subject: 'encargo de pepe', // Subject line
    text: 'encargo de pepe', // plain text body
    html: '<p>Pedido de Pepe</p><ul><li>5 Manzanas</li><li>4 Peras</li><li>5 Platanos</li><li>10 Naranjas</li><li>15 Mandarinas</li></ul><p>Paso a puscarlo hoy 09/03/2017 a partir de las 18:00</p>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
console.log("transporter")
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
