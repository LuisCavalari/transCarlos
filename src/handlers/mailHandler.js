const nodemailer = require('nodemailer')
const handleBars = require('nodemailer-express-handlebars')
const path = require('path')

const tranporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0089dc1adfee86",
        pass: "7faa4d690ac1dd"
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