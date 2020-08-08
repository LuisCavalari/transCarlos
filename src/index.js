const app = require('./app')

const PORT = 3333 || null

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})