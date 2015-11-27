"use strict";


//------------------------------------------------
//  Schema
//------------------------------------------------
var setting = require('../settings');
var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
}, {
    collection: setting.collections.USER
});

var User = mongoose.model("User", UserSchema);



//------------------------------------------------
// methods
//------------------------------------------------

function create(name, age, callback) {
    var newUser = new User({name: name, age: age});
    newUser.save(callback);
}

function listAll(callback) {
    User.find({}, callback);
}

function findUserById(callback) {
    User.findById(req.params.user_id, callback);
}

function updateUserById(userId, updateUser, error, success) {
    User.findById(userId, function (err, user) {
        if (err) {
            return error(err);
        } else {
            let name = updateUser.name ? updateUser.name : user.name;
            let age = updateUser.age ? updateUser.age : user.age;
            user.name = name;
            user.age = age;
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

exports.User = User;
exports.create = create;
exports.listAll = listAll;
exports.findUserById = findUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
