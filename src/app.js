const express = require('express')
const mustache = require('mustache-express')
const routes = require('./routes')
const path = require('path')

const app = express()

app.engine('mst', mustache(path.resolve(__dirname, 'view', 'partials'), '.mst'))
app.set('view engine', 'mst')
app.set('views', path.resolve(__dirname, 'view'))

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(routes)

module.exports = app
