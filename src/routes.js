const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/orcamento', (request, response) => {
    response.render('orcamento')
})

module.exports = router