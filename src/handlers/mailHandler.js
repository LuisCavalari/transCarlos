require('dotenv').config()
const nodemailer = require('nodemailer')
const handleBars = require('nodemailer-express-handlebars')
const path = require('path')

const tranporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

tranporter.use('compile', handleBars({
    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./src/view/email/partials'),
        layoutsDir: path.resolve('./src/view/email'),
        defaultLayout: 'form.html',
    },
    viewPath: path.resolve('./src/view/email'),
    extName: '.html'
}))

exports.send = async (options) => {
    await tranporter.sendMail(options)
}