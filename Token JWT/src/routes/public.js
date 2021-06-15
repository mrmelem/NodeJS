const app = require('express').Router();

const { login } = require('../controllers/loginController');

app.get('/public', login);

module.exports = app