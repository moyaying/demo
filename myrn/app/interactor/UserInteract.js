/**
 * Created by moo on 15/11/27.
 */
'use strict';

import {URLS, Code} from '../data/Api';
import User from '../model/User';
import CommonDataMapper from '../data/mapper/CommonDataMapper';
import UserMapper from '../data/mapper/UserMapper';

export default class UserInteract {
    static getAllUsers(callback) {
        fetch(URLS.USER)
            .then(function (response) {
                return response.json();
            })
            .then(function (dataJson) {
                var {message, data} = CommonDataMapper.mapData(dataJson);
                if (message.code != Code.SUCCESS) {
                    throw new Error(message.message, message.code);
                } else {
                    var users = UserMapper.mapUsers(data);
                    callback(null, users);
                }
            })
            .catch(function (e) {
                callback(e);
            })
            .done();
    }
}