const app = require('express')();

app.use(require('./public'));
app.use(require('../middleware/auth'));
app.use(require('./private'));

module.exports = app;