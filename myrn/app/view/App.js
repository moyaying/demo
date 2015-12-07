/**
 * Created by moo on 15/11/29.
 */
'use strict';

import Render from './AppRender';

import React from 'react-native';

//import UserInteract from '../interactor/UserInteract';
import Dispatcher, {PropType} from '../dispatcher/Dispatcher';
import User from '../model/User';
import UserInteract from '../interactor/UserInteract';
var md5 = require('md5');

//initialize app
//Object.assign(React.Component.prototype, PropType);//给所有Component都加上消息事件
UserInteract.login('moo', md5('1'), (err, data)=>{
    if(err){
        console.log(err);
    } else {
        User.getInstance().updateUser(data);
        User.getInstance().isLogin = true;

        console.log('自动登录成功!');
    }
});


var currentUser;

function getUserNameState() {
    return {
        username: (currentUser ? currentUser.name : '游客')
    };
}

function getAgeState() {
    return {
        age: (currentUser ? currentUser.age : 0)
    };
}

/**
 * 这里主要是写业务逻辑
 *
 * Render主要是写UI
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = Object.assign(
            {page: 'travel'},
            getUserNameState(),
            getAgeState()
        );

        //为了让UI触发回调的时候，this能使用。
        this.onTextPress = this.onTextPress.bind(this);
        this.listenCallBack = this.listenCallBack.bind(this);

        Dispatcher.addListener(this.listenCallBack);
        //this.addListener(this.listenCallBack)
    }

    componentDidMount() {
        this._fetchUsers();
    }

    render() {
        return Render.call(this, this.props, this.state);
    }

    _fetchUsers(){
        //UserInteract.getAllUsers((err, users) => {
        //    if (err) {
        //        console.log(err);
        //    } else {
        //        for (let user of users) {
        //            currentUser = user;
        //        }
        //
        //        //update view
        //        this.setState(getUserNameState());
        //        this.setState(getAgeState());
        //    }
        //});
    }

    onTextPress(event){
        Dispatcher.dispatch(currentUser);
        //this.dispatch(currentUser);



        //let r = Dispatcher.removeListener(this.listenCallBack);
        //console.log("remvoe listener:" + r);
    }

    listenCallBack(action){
        console.log(action);
    }

}

//var Us = function(name){
//    this.name = name;
//}
//Us.prototype = {
//    hi: function(){
//        console.log("***" + this.name);
//    }
//}
////Us.prototype.hi =  function(){
////    console.log(this.name);
////}
//var us = new Us("ggg");
//us.hi();