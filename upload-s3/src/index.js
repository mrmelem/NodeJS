if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

require('./configs/mongoose');

const express = require('express')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require('cors');
app.use(cors());

const routes = require('./routes');
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})