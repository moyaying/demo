"use strict";

var userModel = require('../../models/user');
var User = userModel.User;
var Code = require('../../const.js').Code;
var Message = require('../../models/res-data').Message;

//--------------------------------------------------
//  for api
//--------------------------------------------------
exports.create = function (req, res, next) {
    let userObject = {};
    userObject.name = req.body.name;
    userObject.age = req.body.age;
    userObject.password = req.body.password;
    userObject.thumb = req.body.thumb;
    userModel.create(userObject, function (err) {
        if (err) {
            return next(err);
        } else {
            res.json(new Message(Code.SUCCESS, '用户创建成功'));
        }
    });
}

exports.listAll = function (req, res, next) {
    userModel.listAll(function (err, users) {
        if (err) {
            return next(err);
        } else {
            let message = new Message(Code.SUCCESS, '获取用户列表成功', users);
            res.json(message);
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
            let message;
            if (user) {
                message = new Message(Code.SUCCESS, '查找用户成功', user);
            } else {
                message = new Message(Code.ERROR, '找不到用户');
            }
            res.json(message);
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
            let message = new Message(Code.SUCCESS, '更新成功');
            res.json(message);
        });
}

//for delete
exports.deleteUserById = function (req, res, next) {
    userModel.deleteUserById(req.params.user_id, function (err, data) {
        if (err) {
            return next(err);
        } else {
            if (data) {
                let message = new Message(Code.SUCCESS, '删除成功');
                res.json(message);
            } else {
                let message = new Message(Code.ERROR, '删除失败');
                res.json(message);
            }
        }
    });
}

//login
exports.login = function (req, res, next) {
    let account = req.query.account;
    let password = req.query.password;
    userModel.login(account, password, function (err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
}

exports.register = function (req, res, next) {
    let account = req.body.account;
    let password = req.body.password;

    userModel.register(account, password, (err, data)=> {
        if(err){
            return next(err);
        } else {
            res.json(data);
        }
    });
}
