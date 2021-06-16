module.exports = {
    async read(req,res){
        console.log(req.file);
        return res.status(200).json({msg: "Rota ok" });
    }
}