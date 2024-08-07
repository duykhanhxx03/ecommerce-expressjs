const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();


const app = express();


//init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());


app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'hehe',
    });
});

//init db
const {instanceMongoDB} = require('./dbs/init.mongodb');

//init routers

//monitor
const {checkOverLoad} = require('./helpers/check.connect');
checkOverLoad();

//handling error

module.exports = app;
