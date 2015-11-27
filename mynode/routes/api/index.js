'use strict'

var express = require('express');
var router = express.Router();

var Code = require('../../const').Code;

var Message = require('../../models/res-data').Message;

router.use('/user/', require('./user'));

router.get('/', function (req, res, next) {
    res.json(new Message(Code.ERROR, "welcome to api, but nothing back!"));
});


// catch 404 and forward to error handler
router.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    err.code = Code.ERROR;
    next(err);
});

//处理错误
router.use(function (err, req, res, next) {
    err.status = err.status || 500;
    err.code = err.code || Code.ERROR;

    var message = new Message(err.code, err.message);
    message.status = err.status;
    message.stack = isDebug ? err.stack : "";

    res.json(message);
});

module.exports = router;