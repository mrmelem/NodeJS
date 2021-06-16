const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

require('./config/mongoose');

const routes = require('./routes');
app.use(routes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server on at port ${PORT}`);
})