/**
 * Created by moo on 15/12/4.
 */
'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../../controllers/api/travelMessage');

router.route('/')
    .post(controller.create)
    .get(controller.getAllTravelMessages);

module.exports = router;