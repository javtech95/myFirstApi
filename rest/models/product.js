//Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

//Schema
const productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

//Return Model
module.exports = restful.model('Products', productSchema);