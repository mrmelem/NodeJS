const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
require('./database/mongoose');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log(`Server on at port 3000`)
})

