/**
 * Created by moo on 15/11/29.
 */
'use strict';

import Render from './AppRender';

import React from 'react-native';

import UserInteract from '../interactor/UserInteract';


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

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = Object.assign(
            {},
            getUserNameState(),
            getAgeState()
        );
    }

    componentDidMount() {
        this._fetchUsers();
    }

    render() {
        return Render.call(this, this.props, this.state);
    }

    _fetchUsers(){
        UserInteract.getAllUsers((err, users) => {
            if (err) {
                console.log(err);
            } else {
                for (let user of users) {
                    currentUser = user;
                }

                //update view
                this.setState(getUserNameState());
                this.setState(getAgeState());
            }
        });
    }
}