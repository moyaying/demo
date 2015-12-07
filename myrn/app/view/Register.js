/**
 * Created by moo on 15/12/2.
 */
'use strict';

import appStyles from '../res/style/AppStyle';
import Button from 'react-native-button';
import UserInteract from '../interactor/UserInteract'
var md5 = require('md5');

import React, {
    Text,
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tips: '',
            account: '',
            password1: '',
            password2: '',
            running: false,
        }
    }

    _verify() {
        if (this.state.account.length == 0) {
            this.setState({tips: '请输入用户名'});
            return false;
        } else if (this.state.password1.length == 0) {
            this.setState({tips: '请输入密码'});
            return false;
        } else if (this.state.password2.length == 0) {
            this.setState({tips: '请确认密码'});
            return false;
        } else if (this.state.password1 !== this.state.password2) {
            this.setState({tips: '两次输入密码不相同'});
            return false;
        } else {
            return true;
        }
    }

    _handleRegister() {
        let verify = this._verify();
        if (verify) {
            let account = this.state.account;
            let password = md5(this.state.password1);

            this.setState({running: true});

            UserInteract.register(account, password, (err, data)=> {
                if (err) {
                    console.dir(err);
                    this.setState({tips: err.message});
                } else {
                    console.dir(data);
                }

                this.setState({running: false});
            });
        }
    }

    render() {
        return (
            <View style={[appStyles.windowContainerWithTitleBar, styles.container]}>
                <TextInput
                    style={styles.textInput}
                    placeholder="用户名"
                    value={this.state.account}
                    onChangeText={(text) => this.setState({account: text})}
                    editable={!this.state.running}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({password1: text})}
                    secureTextEntry={true}
                    value={this.state.password1}
                    placeholder="密码"
                    editable={!this.state.running}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({password2: text})}
                    secureTextEntry={true}
                    value={this.state.password2}
                    placeholder="密码确认"
                    editable={!this.state.running}/>

                <View style={{marginTop:10, marginBottom:10}}>
                    <Text style={{fontSize:12, color:'red', height:16}}>
                        {this.state.tips}
                    </Text>
                </View>


                <Button style={styles.button}
                        onPress={this._handleRegister.bind(this)}
                        disabled={this.state.running}>
                    注册
                </Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 16,
    },
    textInput: {
        height: 30,
        fontSize: 12,
        backgroundColor: '#dddddd',
        padding: 4,
        marginBottom: 4
    },
    button: {
        backgroundColor: '#4c8efa',
        fontSize: 12,
        color: 'white',
        fontWeight: 'normal',
        height: 30,
        paddingTop: 6
    },
});