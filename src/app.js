const express = require('express')
const mustache = require('mustache-express')
const routes = require('./routes')
const path = require('path')

const app = express()

app.use(routes)
app.engine('mst', mustache())
app.set('view engine', 'mst')
app.set('views', path.resolve(__dirname, 'view'))

module.exports = app
