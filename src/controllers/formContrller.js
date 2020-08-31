const mailHander = require('../handlers/mailHandler')


exports.submitForm = (request, response) => {
    const data = request.body
    try {
        mailHander.send({
            to: 'lfelipe.felipe4@gmail.com',
            subject: 'Orçamento',
            template: 'form',
            context: data
        })
        request.flash('success', 'Orçamento enviado com sucesso')
        response.redirect('/')
    } catch (error) {
        request.flash('error', 'Ocorreu um erro ao enviar o orçamento')
        response.redirect('/')
    }

}