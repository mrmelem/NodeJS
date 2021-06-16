const app = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const Product = require('./controllers/productController');

app.post('/', multer(multerConfig).single('file'),Product.read)

module.exports = app;