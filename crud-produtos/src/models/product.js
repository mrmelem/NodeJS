const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    title: String,
    images: [
        {url: String}
    ],
}, { timestamps: true })

const Product = mongoose.model('Products', DataSchema);
module.exports = Product