const app = require('express')();

// Rotas públicas
const public = require('./public');
app.use(public);

// Autenticação para rotas
const auth = require('../middleware/auth');
app.use(auth);

// Rotas privadas (Requer Validação via middleware com tokenjwt no cabeçalho da requisição)
const private = require('./private');
app.use(private);

module.exports = app;