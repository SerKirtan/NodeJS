const product = require('../models/product')
const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    // throw new Error('Testing async errors')
    const products = await Product.find({}).sort('price ')
    res.status(200).json({products , noOfProducts: products.length})
}
const getAllProducts = async (req, res) => {
    // throw new Error('Testing async errors')
    const {featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}

    if(featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company) {
        queryObject.company = company
    }
    if(name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    if(numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '<': '$lt',
            '<=': '$lte',
            '=': '$eq',
        }
        const regEx =/\b(>|<|>=|<=|=)\b/g //Note : Dont overthink, you can simply find these on stack overflow or somewhere
        let filters = numericFilters.replace(regEx, (match) =>`-${operatorMap[match]}-`)
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)){
                queryObject[field] = {[operator]:Number(value)}
            }
        })
    }

    console.log(queryObject)
    let result = Product.find(queryObject)

    if(sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if(fields) {
        const selectList = fields.split(',').join(' ');
        result = result.select(selectList)
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result
    console.log(req.query)
    res.status(200).json({products , noOfProducts: products.length})
}

module.exports = {
    getAllProducts, getAllProductsStatic
}