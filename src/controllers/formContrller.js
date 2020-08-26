const mailHander = require('../handlers/mailHandler')


exports.submitForm = (request, response) => {
    console.log(request.body)
    mailHander.send({
        to: 'lfelipe.felipe4@gmail.com',
        subject: 'Orçamento',
        template: 'form',
        context: { name: 'luis' }

    })

}