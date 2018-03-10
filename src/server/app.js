const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev')); // log request in console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))

require('./models/Budget')
require('./routes/BudgetsRoute')(app);


module.exports = app