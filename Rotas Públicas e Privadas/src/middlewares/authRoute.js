module.exports = (req, res, next) => {
    // Lógica de programação para autenticação de token

    // const auth = true;
    // const auth = false;

    if (auth) return next();
    else return res.status(403).send("Sem permissão");
}