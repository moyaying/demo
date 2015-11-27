'use strict';

var express = require('express');
var router = express.Router();

//--------------------------------------------
//  api restful router
//--------------------------------------------
router.use('/api', require('./api'));



//--------------------------------------------
// wwww router
//--------------------------------------------
router.use('/user', require('./www/user'));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Welcome HOME'});
});




module.exports = router;
