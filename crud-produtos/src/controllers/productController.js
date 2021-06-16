const Product = require('../models/product');

module.exports = {
    async create(req, res){
        const {title} = req.body

        try {
            const hasProduct = await Product.findOne({title});
            if (hasProduct) return res.status(403).json({msg: "Product already exists"});

            const newProduct = await Product.create({title});
            return res.status(200).json(newProduct);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async read(req, res){
        const products = await Product.find();

        return res.status(200).json(products);
    },
    async update(req, res){
        const {id} = req.params
        
        try {
            await Product.findByIdAndUpdate(id, req.body);
            const newProduct = await Product.findById(id);
            return res.status(200).json(newProduct);
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    async delete(req, res){
        const {id} = req.params;

        try {
            const product = await Product.findByIdAndDelete(id);
            return res.status(200).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async upload(req,res){
        return res.status(200).json({ref: req.file.filename})
    }
}