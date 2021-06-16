const routes = require('express').Router();
const User = require('../controllers/userController');
const Product = require('../controllers/productController');

routes.post('/register', User.create)
routes.post('/login',User.login);

routes.get('/products', Product.read);

module.exports = routes