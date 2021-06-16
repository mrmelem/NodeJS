const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../utils/token');


module.exports = {
    async create(req, res){
        const {email,username,name,password} = req.body

        try {
            const hasUser = await User.findOne({ $or: [{username}, {email: username}] });

            if (hasUser) return res.status(401).json({msg: "Email or Username has already been registered"});

            const newUser = await User.create({ email, username, name, password});
            
            const payload = {id: newUser.id};

            const token = jwt.sign(payload);

            return res.status(200).json(token);
        } catch (error) {
            return res.status(500).json(error);
        }

    },
    async login(req, res){
        const {username,password} = req.body

        try {
            const hasUser = await User.findOne({ $or: [{username}, {email: username}] });

            if (!hasUser) return res.status(404).json({msg: "User not found"});

            const verify = bcrypt.compareSync(password, hasUser.password);

            if (!verify) return res.status(401).json({msg: "Invalid password"});

            const payload = {id: hasUser.id};

            const token = await jwt.sign(payload);

            return res.status(200).json(token);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async update(req, res){
        const [hashType, hash] = req.headers.authorization.split(' ');
        const id = await jwt.getId(hash);

        try {
            await User.findByIdAndUpdate(id, req.body);

            const newUser = await User.findById(id);

            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
}