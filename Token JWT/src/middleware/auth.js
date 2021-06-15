const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY || 'SECRET_KEY';

module.exports = async (req, res, next) => {
    // Retira o "Bearer " do token.
    const [hashType, hash] = req.headers.authorization.split(' ');

    // Verifica se tem o token JWT 
    if (!hash) return res.status(403).send("Você não tem permissão para acessar essa página");

    // Testes simples
    const preVerify = hash;
    // Verifica se está no formato de jwt (HEADER.PAYLOAD_ENCODED.HASH).
    if (preVerify.split('.').length !== 3) return res.status(403).send("Você não tem permissão para acessar essa página");

    // Verifica se o token não foi comprometido.
    const verify = await jwt.verify(hash, secret, (err, data) => {
        if (err) return false
        return data
    })

    // Se houver erro, ele encerra a requisição;
    if (!verify) return res.status(403).send("Você não tem permissão para acessar essa página");

    // Tudo certo, pode prosseguir.
    return next();
}