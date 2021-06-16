const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY

module.exports = {
    async getId(token){

        const {id} = jwt.decode(token)

        return id;
    },
    async sign(payload){
        const token = jwt.sign(payload, secret, { expiresIn: '24h'});

        return token;
    },
    async verify(token){
        return jwt.verify(token, secret, (err,data) => {
            if (err) {
                return false
            }
            return true
        });
    }
}