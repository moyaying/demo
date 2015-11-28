/**
 * Created by moo on 15/11/27.
 */
'use strict';

var util = require('../util/util');
var Message = require('../model/message');

var User = require('../model/user');

function mapCommonData(responseJson){
    if(util.isJson(responseJson)){
        var message = new Message(responseJson.code, responseJson.message);
        return {message: message, data: responseJson.data};
    } else {
        return null;
    }
}

function mapUsers(users){
    var userList = [];
    for(let user of users){
        var u = new User(user.name, user.age);
        userList.push(u);
    }

    return userList;
}

module.exports = {
    mapCommonData: mapCommonData,
    mapUsers: mapUsers
}