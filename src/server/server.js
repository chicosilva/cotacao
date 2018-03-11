const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const keys = require('../configs/keys');
const session = require('express-session');
const cookieParser = require('cookie-parser');

require('./db');

const app = express();

app.use(morgan('dev')); // log request in console

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.set('trust proxy', 1);

app.use(session({
    secret: keys.secret,
    resave: false,
    saveUninitialized: true
}));

const sess = {
    secret: 'keyboard cat',
    cookie: {}
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1);
    sess.cookie.secure = true;
}

app.use(session(sess));

require('./models/Budget');
require('./models/User');
require('./routes/UserRoute')(app);
require('./routes/BudgetsRoute')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

module.exports = app;