/**
 * Created by moo on 15/11/29.
 */
'use strict';

import User from '../../model/User';

export default class UserMapper{
    static mapUsers(users){
        var userList = [];
        for (let user of users) {
            var u = new User(user.name, user.age);
            userList.push(u);
        }

        return userList;
    }
}