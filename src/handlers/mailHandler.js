const nodemailer = require('nodemailer')

const tranporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0089dc1adfee86",
        pass: "7faa4d690ac1dd"
    }
})

exports.send = async (options) => {
    await tranporter.sendMail(options)
}