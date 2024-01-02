const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
    const {username, password} = req.body
    
    if(!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    //just for demo. normally provided by DB
    const id = new Date().getDate()

    //try to keep payload small for better user experience
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
    res.status(200).json({message:'User created', token})

}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({message:`Hello ${req.user.username}!!!`, secret:`Here is your authorized data, lucky num = ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}