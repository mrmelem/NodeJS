const app = require('express')();

const Public = require('./Public');
app.use(Public);

const Auth = require('../middlewares/authRoute');
const Private = require('./Private');
app.use(Auth);
app.use(Private);

module.exports = app;