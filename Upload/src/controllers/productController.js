const Product = require('../models/product');

module.exports = {
    async create(req,res){
        return res.status(200).json({msg: "Rota ok" });
    },
    async read(req,res){
        console.log(req.file);
        return res.status(200).json({msg: "Rota ok" });
    },
    async update(req,res){
        return res.status(200).json({msg: "Rota ok" });
    },
    async delete(req,res){
        return res.status(200).json({msg: "Rota ok" });
    }
}