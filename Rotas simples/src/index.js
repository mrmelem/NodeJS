const app = require('express')();
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server on at port ${PORT}`)
})
