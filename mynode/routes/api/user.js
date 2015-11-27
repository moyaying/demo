'use strict';

var express = require('express');
var router = express.Router();

var userController = require('../../controllers/api/user');

router.route('/')
	.post(userController.create)
	.get(userController.listAll);

router.route('/:user_id')
	.get(userController.findUserById)		//query data
	.put(userController.updateUserById)		//for update data
	.delete(userController.deleteUserById);	//delete data

module.exports = router;