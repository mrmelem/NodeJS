const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) {
        console.log("[MongoDB] - " + err.message)
    } else {
        console.log("[MongoDB] Status Service: Ok")
    }
})

module.exports = mongoose