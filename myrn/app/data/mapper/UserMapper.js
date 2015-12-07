/**
 * Created by moo on 15/11/29.
 */
'use strict';

import User from '../../model/User';

export default class UserMapper {
    static mapUsers(users) {
        var userList = [];
        for (let key in users) {
            let user = users[key];
            let u = new User({name: user.name, age: user.age, thumb: user.thumb, phone: user.phone});
            userList.push(u);
        }

        return userList;
    }

    static mapUser(user) {
        let u = new User(user);
        return u;
    }
}