//var createError = require('http-errors');
//var express = require('express');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

//var app = express();


//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/event', (req, res) => {
  var ob = {
    "eventid": 45345,
    "eventName": "Birabiro",
    "eventDescription": "A diplo concert",
    "startDate": "Jan-08-20",
    "endDate": "Jan-08-20",
    "startTime": "08:30:00",
    "endTime": "12:00:00",
    "eventStatus": "SCHEDULED",
    "tickStat": "OPEN",
    "idHall": 34,
    "idVenue": 56
  }
  res.send(ob)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})