// require('dotenv').config()

// const connectDB = require('./db/connect')
// const Product = require('./models/product')
// const jsonProducts = require('./products.json') //Products.json has data in it


// const start = async() => {
//     try {
//         await connectDB(process.env.MONGO_URI)
//         await Product.deleteMany();  // delete all current products
//         await Product.create(jsonProducts) 
//         console.log('Sucesssssssss!')
//         process.exit(0)
//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     }
// }

// start()