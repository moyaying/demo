/**
 * Created by moo on 15/11/30.
 */
'use strict';

import React, {
    Text,
    StyleSheet,
    View,
} from 'react-native';

import appStyles from '../res/style/AppStyle';

import User from '../model/User';
import Login from './Login';

import Button from 'react-native-button';

export default class MyScene extends React.Component {
    constructor(props) {
        super(props);

        this.navigator = props.navigator;

        this.state = {
            isLogin: false,
        };
    }

    componentDidMount(){
        this.setState({isLogin: User.getInstance().isLogin});
    }

    render() {
        let view = this._getViewByLoginState(this.state.isLogin);
        return (
            <View style={[styles.container]}>
                {view}
            </View>
        );
    }

    _getViewByLoginState(isLogin) {
        if (isLogin) {
            return (
                <View style={styles.content}>
                    <Text style={styles.text}>Hi, {User.getInstance().name}</Text>
                    <Button style={styles.button}
                            onPress={()=>{
                            User.getInstance().isLogin = false;
                            this.setState({isLogin:false});
                        }}>
                        注销
                    </Button>
                </View>

            );
        } else {
            return (
                <View style={styles.content}>
                    <Text style={styles.text}>你还没有登录</Text>
                    <Button style={styles.button}
                            onPress={()=>{
                            this.navigator.push(Login.getRouter());
                        }}>
                        登录
                    </Button>
                </View>
            );
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'column'
    },
    text: {
        fontSize: 30,
        color: '#ff0000'
    },
    button: {
        backgroundColor: '#4c8efa',
        fontSize: 12,
        color: 'white',
        fontWeight: 'normal',
        height: 30,
        width: 100,
        paddingTop: 6,
        marginTop:10,
        marginLeft:6,
        marginRight:6,
    },
});