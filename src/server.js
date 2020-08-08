const express = require('express')

const server = express()

server.get('/', (request, response) => {
    response.send('It works')
})

server.listen(3333, () => {
    console.log('Runing on 3333')
})
