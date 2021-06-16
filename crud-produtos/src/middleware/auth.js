const Token = require('../utils/token');

module.exports = async (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) return res.status(403).json({msg: "Invalid Credentials"});

    const [hashType, hash] = token.split(' ');
    if (!hash) return res.status(403).json({msg: "Invalid Credentials"});

    if (!await Token.verify(hash)) return res.status(403).json({msg: "Invalid Credentials"});

    return next();
}