"use strict";

var express = require('express');
var router = express.Router();

router.use('/', require('./index-auth'));

router.use('/user', require('./user'));

module.exports = router;