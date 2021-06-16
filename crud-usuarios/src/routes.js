const app = require('express').Router()

const User = require('./controllers/userController');

app.post('/user', User.create);

app.get('/user', User.read);

app.get('/user/:id', User.read);

app.put('/user/:id', User.update);

app.delete('/user/:id', User.delete);

module.exports = app;