/**
 * Created by moo on 15/11/27.
 */
'use strict';

import {URLS, Code} from '../data/Api';
import User from '../model/User';

import UserMapper from '../data/mapper/UserMapper';
import {handleMessageJsonFetch} from '../util/FetchUtil';

export default class UserInteract {

    static getAllUsers(callback) {
        handleMessageJsonFetch(fetch(URLS.USER), function (err, data) {
            if (err) {
                callback(err);
            } else {
                var users = UserMapper.mapUsers(data);
                callback(null, users);
            }
        });
    }

    static login(account, password, callback) {
        handleMessageJsonFetch(fetch(URLS.USER_LOGIN + `?account=${account}&password=${password}`), callback);
    }

    static register(account, password, callback) {
        let f = fetch(URLS.USER_REGISTER, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    account: account,
                    password: password,
                }),
            }
        );

        handleMessageJsonFetch(f, callback);
    }

}