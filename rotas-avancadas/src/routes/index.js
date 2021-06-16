const app = require('express')();

const Public = require('./public');
app.use(Public);

const Auth = require('../middlewares/authRoute');
const Private = require('./private');
app.use(Auth);
app.use(Private);

module.exports = app;