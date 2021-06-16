const app = require('express').Router();

app.get('/private', (req, res) => {
    return res.status(200).send("Funcionando na rota privada");
})

module.exports = app;