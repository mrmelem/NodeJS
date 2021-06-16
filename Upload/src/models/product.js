const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    ref: String,
    title: String,
    images: [
        {
            uri: String
        }
    ]
}, { timestamps: true })

const Product = mongoose.model('users', DataSchema);
module.exports = Product