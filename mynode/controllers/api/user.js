"use strict";

var userModel = require('../../models/user');
var User = userModel.User;
var Code = require('../../const.js').Code;

//--------------------------------------------------
//  for api
//--------------------------------------------------
exports.create = function (req, res, next) {
    let name = req.body.name;
    let age = req.body.age;
    userModel.create(name, age, function (err) {
        if (err) {
            return next(err);
        } else {
            res.json({
                code: Code.SUCCESS,
                message: 'User created',
            });
        }
    });
}

exports.listAll = function (req, res, next) {
    userModel.listAll(function (err, users) {
        if (err) {
            return next(err);
        } else {
            res.json({
                code: Code.SUCCESS,
                message: "get users success",
                data: users,
            });
        }
    });
}


//for user_id
//for get
exports.findUserById = function (req, res, next) {
    userModel.findUserById(req.params.user_id, function (err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
}

//for put, update
exports.updateUserById = function (req, res, next) {
    var updateUser = new User({name: req.body.name, age: req.body.age});
    userModel.updateUserById(req.params.user_id,
        updateUser,
        function (err) {
            return next(err);
        }, function () {
            res.json({code: Code.SUCCESS, message: "updated!"});
        });
}

//for delete
exports.deleteUserById = function (req, res, next) {
    userModel.deleteUserById(req.params.user_id, function (err, data) {
        if (err) {
            return next(err);
        } else {
            if (data) {
                res.json({
                    code: Code.SUCCESS,
                    message: "delete success",
                });
            } else {
                res.json({
                    code: Code.ERROR,
                    message: "delete fail",
                });
            }
        }
    });
}
