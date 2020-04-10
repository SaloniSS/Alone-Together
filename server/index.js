//Source: https://www.youtube.com/watch?v=KyWaXA_NvT0&t=7s

const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path:'./config/config.env' });

const resources = require('./routes/resources');

const app = express();

app.use('/api/v1/resources', resources);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);