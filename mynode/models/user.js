"use strict";


//------------------------------------------------
//  Schema
//------------------------------------------------
var setting = require('../settings');
var Code = require('../const.js').Code;
var mongoose = require("mongoose");
var Message = require('./res-data').Message;

var UserSchema = new mongoose.Schema({
    name: {type: String, unique: true, require: true},
    password: {type: String, required: true},
    age: {type: Number, default: 0},
    thumb: {type: String, default: 'image/thumb.png'}
}, {
    collection: setting.collections.USER
});

UserSchema.post('find', (result) => {//针对查询，修改每个返回的use
    if(isArray(result)){
        for(let user of result){
            modifyUser(user);
        }
    } else {
        let user = result;
        modifyUser(user);
    }

});

var isArray = function(v){
    return toString.apply(v) === '[object Array]';
}

var User = mongoose.model(setting.collections.USER, UserSchema);


//------------------------------------------------
// methods
//------------------------------------------------

function create(userObject, callback) {
    var newUser = new User({
        name: userObject.name,
        age: userObject.age,
        thumb: userObject.thumb,
        password: userObject.password
    });
    newUser.save(callback);
}

function listAll(callback) {
    User.find({}, {password: 0, __v: 0}, callback);
}

function findUserById(callback) {
    User.findById(req.params.user_id, {password: 0, __v: 0}, callback);
}

function updateUserById(userId, updateUser, error, success) {
    User.findById(userId, function (err, user) {
        if (err) {
            return error(err);
        } else {
            let name = updateUser.name ? updateUser.name : user.name;
            let age = updateUser.age ? updateUser.age : user.age;
            let thumb = updateUser.thumb ? updateUser.thumb : user.thumb;
            let password = updateUser.password ? updateUser.password : user.password;
            user.name = name;
            user.age = age;
            user.thumb = thumb;
            user.password = password;
            user.save(function (err) {
                if (err) {
                    return error(err);
                } else {
                    success();
                }
            });
        }
    });
}

function deleteUserById(userId, callback) {
    User.findOneAndRemove({_id: userId}, callback);
}

exports.login = function (account, password, callback) {
    User.findOne({name: account}, {__v: 0}, function (err, data) {
        if (err) {
            return callback(err);
        } else {
            if (data) {
                //upate user
                let user = data;
                modifyUser(user);

                if (user.password === password) {
                    callback(null, new Message(Code.SUCCESS, '登录成功', user));
                } else {
                    callback(null, new Message(-1, '密码不对', user));
                }
            } else {
                callback(null, new Message(-2, '账号不存在', user));
            }
        }
    });
}

exports.register = function (account, password, callback) {
    create({name: account, password: password}, (err, data)=> {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

function modifyUser(user){
    if(user.thumb.indexOf(domain) == -1){
        user.thumb = domain + user.thumb;
    }
}

exports.User = User;
exports.create = create;
exports.listAll = listAll;
exports.findUserById = findUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
