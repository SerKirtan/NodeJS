const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url)
    .then(() => {
        console.log('DB connected!')
    })
}

module.exports = connectDB
