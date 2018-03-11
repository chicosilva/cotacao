const mongoose = require('mongoose');
const keys = require('../configs/keys');
const winston = require('winston');

let mongo_url = keys.mongoUri;

if(process.env.NODE_ENV == 'test'){
  mongo_url = 'mongodb://localhost/cotation_test';
}

mongoose.Promise = global.Promise;
mongoose.connect(mongo_url, function(err) {
  if (err) {
    winston.error('MongoDB connection error: ' + err);
  }
});

mongoose.connection.once('open', function(url) {

  mongoose.connection.on('error', function(err) {
    winston.info('MongoDB event error: ' + err);
  });

});
