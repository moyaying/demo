/**
 * Created by moo on 15/11/27.
 *
 */
'use strict';

let __instance = (function () {
    let instance;
    return (newInstance) => {
        if (newInstance) instance = newInstance;
        return instance;
    }
}());

export default class User {
    constructor(userObj){
        this.updateUser(userObj);

        this.isLogin = false;
    }

    static getInstance(){
        if(__instance()){
            return __instance();
        }

        let _user = new User({});
        let user = __instance(_user);
        return user;
    }

    updateUser(user){
        this.name = user.name;
        this.age = user.age;
        this.thumb = user.thumb;
        this._id = user._id;
        this.password = user.password;
    }
}
