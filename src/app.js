const express = require('express')
require('dotenv').config()
const mustache = require('mustache-express')
const routes = require('./routes')
const path = require('path')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.SECRET))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(flash())
app.use((request, response, next) => {
    response.locals.flashes = request.flash()
    next()
})
app.use(routes)
app.engine('mst', mustache(path.resolve(__dirname, 'view', 'partials'), '.mst'))
app.set('view engine', 'mst')
app.set('views', path.resolve(__dirname, 'view'))
app.use(express.static(path.resolve(__dirname, 'public')))

module.exports = app
