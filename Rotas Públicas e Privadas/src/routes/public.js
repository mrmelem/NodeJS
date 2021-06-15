const app = require('express').Router();

app.get('/', (req, res) => {
    return res.status(200).send("Funcionando na rota pública");
})

module.exports = app;