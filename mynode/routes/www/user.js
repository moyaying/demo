"use strict";

var router = require('express').Router();

var userModel = require('../../models/user');

var userController = require('../../controllers/www/user');

router.get('/', userController.user);

module.exports = router;
