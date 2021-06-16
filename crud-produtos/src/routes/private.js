const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../configs/multer');

const User = require('../controllers/userController');
const Product = require('../controllers/productController');

routes.put('/user', User.update);

routes.post('/products', Product.create);
routes.put('/products/:id', Product.update);
routes.delete('/products/:id', Product.delete);
routes.put('/upload/image', multer(multerConfig).single('file'),Product.upload);

module.exports = routes