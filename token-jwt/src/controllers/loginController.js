const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY || 'SECRET_KEY'

module.exports = {
    async login(req, res) {
        const payload = {
            auth: true,
        }

        const token = await jwt.sign(payload, secret, { expiresIn: '24h' });

        return res.status(200).json(token);
    },
}