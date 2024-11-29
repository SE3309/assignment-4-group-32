const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const openRouter = require('./api/open.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', openRouter);

app.use('/', (req, res, next) => {
    res.json({

    })
})


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    
    next(error);
})


app.use((req, res, next) => {
    res.status = error.status || 500;
    req.json({
        messerorage: error.message
    })

})

module.exports = app;