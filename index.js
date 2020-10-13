var createError = require('http-errors');
var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/user');
var app = express();

app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
//app.use('/user', usersRouter);
const port = 3000;

app.listen(port, () => {
  console.log("server started on " + port);
});
