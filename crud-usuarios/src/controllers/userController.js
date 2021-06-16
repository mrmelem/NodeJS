const User = require('../models/user');

module.exports = {
    async create(req, res) {
        const { name, username, email, password } = req.body

        try {
            const newUser = await User.create({ name, username, email, password });
            return res.status(200).send(newUser);
        } catch (error) {
            return res.status(403).send(error);
        }

    },
    async read(req, res) {
        const { id } = req.params;

        try {
            if (id) {
                const singleUser = await User.findOne({ _id: id });
                return res.status(200).send(singleUser);
            }

            const allUsers = await User.find();
            return res.status(200).send(allUsers);

        } catch (error) {
            return res.status(403).send(error);
        }

    },
    async update(req, res) {
        const { id } = req.params;
        const { name, username, email, password } = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(id, req.body);
            return res.status(200).send(updatedUser);

        } catch (error) {
            return res.status(403).send(error);
        }

    },
    async delete(req, res) {
        const { id } = req.params;

        try {
            const updatedUser = await User.findByIdAndRemove(id);
            return res.status(200).send(updatedUser);
        } catch (error) {
            return res.status(403).send(error);
        }

    }
}