const express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('../configs/keys');
const winston = require('winston');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

require('./models/Budget')

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoUri, function(err) {
  if (err) {
    winston.error('MongoDB connection error: ' + err);
  }
});

mongoose.connection.once('open', function(url) {
  winston.info('MongoDB connected');

  mongoose.connection.on('connected', function() {
    winston.info('MongoDB event connected');
  });

  mongoose.connection.on('disconnected', function() {
    winston.info('MongoDB event disconnected');
    
  });

  mongoose.connection.on('reconnected', function() {
    winston.info('MongoDB event reconnected');
  });

  mongoose.connection.on('error', function(err) {
    winston.info('MongoDB event error: ' + err);
  });

});

const app = express();

require('./routes/BudgetsRoute')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(logger('dev'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);

module.exports = app;