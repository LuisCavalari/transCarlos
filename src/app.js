const express = require('express')
const mustache = require('mustache-express')
const app = express()

app.engine('mst', mustache())
app.set('view engine', 'mst')
app.set('views', __dirname + 'views')

module.exports = app
