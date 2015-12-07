/**
 * Created by moo on 15/12/2.
 */
'use strict';


import React, {
    Text,
    StyleSheet,
    View,
    TextInput,
    Modal,
} from 'react-native';

import appStyles from '../res/style/AppStyle';
import Button from 'react-native-button';
import UserInteract from '../interactor/UserInteract'
import Register from './Register';
import User from '../model/User';

//var alert = require('react-native-alert')

var md5 = require('md5');

export default class Login extends React.Component {
    static getRouter(){
        return {id:'login', title:'登录', component: Login, navigatorBar:{}};
    }

    constructor(props) {
        super(props);

        this.navigator = props.navigator;

        this.state = {
            account: '',
            password: '',
            modalVisible: false,
            logining: false,
            tips:''
        };

        this._handleLogin = this._handleLogin.bind(this);
        //this._handleRegister = this._handleRegister.bind(this)
    }

    _handleLogin() {
        this.setState({logining: true, tips:''});

        let account = this.state.account;
        let password = md5(this.state.password);
        UserInteract.login(account, password, (err, data) => {
            if (err) {
                this.setState({logining: false, tips: err.message});
            } else {
                this.setState({logining: false});

                User.getInstance().updateUser(data);
                User.getInstance().isLogin = true;

                this.navigator.pop();
            }
        });
    }

    _handleRegister() {
        this.navigator.push({id:'register', title:'注册', component:Register, navigatorBar:{}});
    }

    //_setModalVisible(visible) {
    //    setTimeout(()=>this.setState({modalVisible: visible}), 200);
    //}

    render() {
        return (
            <View style={[appStyles.windowContainerWithTitleBar, {flex:1, flexDirection: 'column', margin: 16}]}>
                <View style={{flexDirection:'column'}}>
                    <TextInput
                        style={{height:30, fontSize:12, backgroundColor:'#dddddd', padding: 4}}
                        onChangeText={(text) => this.setState({account: text})}
                        value={this.state.account}
                        editable={!this.state.logining}
                        placeholder="账号"/>
                    <TextInput
                        style={{height:30, fontSize:12, backgroundColor:'#dddddd', padding: 4, marginTop:2}}
                        onChangeText={(text) => this.setState({password: text})}
                        secureTextEntry={true}
                        editable={!this.state.logining}
                        placeholder="密码"
                        value={this.state.password}/>
                </View>

                <View style={{marginTop:11, marginBottom:11}}>
                    <Text style={{fontSize:12, color:'red', height:16}}>
                        {this.state.tips}
                    </Text>
                </View>


                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Button
                        style={[styles.button, styles.buttonLogin, {backgroundColor:'#e18728'}]}
                        onPress={this._handleRegister.bind(this)}>
                        注册
                    </Button>

                    <Button
                        style={[styles.button, styles.buttonLogin]}
                        styleDisabled={{backgroundColor:'#89d4fa'}}
                        disabled={this.state.logining}
                        onPress={this._handleLogin.bind(this)}>
                        {this.state.logining ? '登录中...' : '登录'}
                    </Button>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    button: {
        height: 24,
        width: 170,
        backgroundColor: '#4c8efa',
        fontSize: 12,
        color: 'white',
        fontWeight: 'normal',
    },
    buttonLogin: {
        height: 30,
        paddingTop: 6
    }
});