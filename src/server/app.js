const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

require('./models/Budget')
require('./routes/BudgetsRoute')(app);

app.use(morgan('dev')); // log request in console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))

module.exports = app