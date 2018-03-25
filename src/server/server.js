const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const keys = require('../configs/keys');
const cookieParser = require('cookie-parser');

require('./db');

const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
});

app.use(morgan('dev')); // log request in console

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

// models
require('./models/Product');
require('./models/Budget');
require('./models/User');

//routes
require('./routes/UserRoute')(app);
require('./routes/BudgetsRoute')(app);
require('./routes/ProductsRoute')(app);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV == 'test'){
    app.listen(4999);
}else{
    app.listen(PORT);
}

module.exports = app;