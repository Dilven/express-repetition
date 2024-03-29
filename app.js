const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const routes = require('./routes/index');
const flash = require('connect-flash');
const session = require('express-session');
const errorsHandler = require('./middlewares/error');

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'dog hero',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));
app.use('/', routes);

app.use(errorsHandler.notFound);
app.use(errorsHandler.catchErrors);

module.exports = app;



