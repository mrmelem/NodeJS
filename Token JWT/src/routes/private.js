const app = require('express').Router();

app.get('/private', (req, res) => {
    return res.status(200).send("Rota privada");
})

module.exports = app