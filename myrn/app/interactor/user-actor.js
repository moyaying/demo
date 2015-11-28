/**
 * Created by moo on 15/11/27.
 */
'use strict';

var User = require('../model/user');
var api = require('../data/api');
var HTTP_CONST = api.HTTP_CONST;
var Code = api.CODE;

var mapper = require('../common/mapper');

function getAllUsers(){
    return fetch(HTTP_CONST.USER)
        .then(function(response){
            return response.json();
        })
        .then(function(dataJson){
            var {message, data} = mapper.mapCommonData(dataJson);

            if(message.code != Code.SUCCESS){
                throw new Error(message.message, message.code);
            } else {
                var users = mapper.mapUsers(data);
                return users;
            }
        });
}

exports.getAllUsers = getAllUsers;