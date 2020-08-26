const express = require('express')
const formController = require('./controllers/formContrller')
const router = express.Router()

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/orcamento', (request, response) => {
    response.render('orcamento')
})

router.post('/orcamento', formController.submitForm)

module.exports = router