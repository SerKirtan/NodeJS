const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public')) //html, css...
app.use(express.json()) //req.body


//routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)

const PORT = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT , console.log(`Server listening to port ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}
start()