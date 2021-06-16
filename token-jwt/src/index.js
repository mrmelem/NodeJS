const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())

const cors = require('cors');
app.use(cors())

const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})