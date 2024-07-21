const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
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

//init routers

//handling error

module.exports = app;