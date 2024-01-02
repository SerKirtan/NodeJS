require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middlware
app.use(express.static('./public'))
app.use(express.json())

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(PORT, console.log(`Server is listening on port ${PORt}...`))
    } catch (error) {
        console.log(error)
    }
}

start()