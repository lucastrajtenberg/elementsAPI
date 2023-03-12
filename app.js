var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// aca se guardan en una variable las rutas definida so,
var indexRouter = require('./routes/index');
var elementsRouter = require('./routes/elements');

var app = express();

// MIDDLEWARES
app.use(logger('dev')); //consola (post, put)
app.use(express.json()); // soporte para json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', 3000); 
app.use('/', indexRouter);
app.use('/elements', elementsRouter); 

module.exports = app;
