const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.status(200).send('Funcionando')
})

routes.post('/', (req, res) => {
    return res.status(200).send('Funcionando')
})

module.exports = routes;