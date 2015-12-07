/**
 * Created by moo on 15/12/3.
 */
'use strict';

import React, {
    Text,
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

import appStyles from '../res/style/AppStyle';

import Button from 'react-native-button';
import TravelMessageInteract from '../interactor/TravelMessageInteract';
import User from '../model/User';


export default class PostTravelMessage extends React.Component {
    static getRouter() {
        return {id: 'postTravelMessage', title: '发布乘车信息', component: PostTravelMessage, navigatorBar: {}};
    }

    constructor(props) {
        super(props);

        this.state = {
            tips:'',
            startTime: '',
            startSpace: '',
            message: '',
            running: false,
        };

        this.navigator = props.navigator;
    }

    render() {
        return (
            <View style={[appStyles.windowContainerWithTitleBar, styles.container]}>
                <View style={styles.rowItem}>
                    <Text
                        style={styles.label}>
                        出发时间:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.startTime}
                        onChangeText={(text) => this.setState({startTime: text})}
                        editable={!this.state.running}/>
                </View>

                <View style={styles.rowItem}>
                    <Text
                        style={styles.label}>
                        出发地点:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({startSpace: text})}
                        editable={!this.state.running}
                        value={this.state.startSpace}/>
                </View>

                <View style={[styles.rowItem, {height:100}]}>
                    <Text
                        style={styles.label}>
                        旅程信息:
                    </Text>
                    <TextInput
                        multiline={true}
                        editable={!this.state.running}
                        onChangeText={(text) => this.setState({message: text})}
                        style={[styles.textInput, {height:100}]}
                        value={this.state.message}/>
                </View>

                <View style={{margin:10}}>
                    <Text style={{fontSize:12, color:'red', height:16}}>
                        {this.state.tips}
                    </Text>
                </View>

                <Button
                    onPress={this._handlePost.bind(this)}
                    style={styles.button}
                    disabled={this.state.running}>
                    提交
                </Button>

            </View>
        );
    }

    _handlePost(){
        if(this._verify()){
            this.setState({tips: '', running: true});

            TravelMessageInteract.addTravelMessage(this.state.startTime, this.state.startSpace, this.state.message, User.getInstance()._id, (err, data)=>{
                if(err){
                    this.setState({tips: err, running: false});
                } else {
                    this.setState({tips: '', running: false});
                }
            });
        }
    }

    _verify(){
        if(!this.state.startTime){
            this.setState({tips: '请填写出发时间'})
            return false;
        } else if(!this.state.startSpace){
            this.setState({tips: '请填写出发地点'})
            return false;
        } else if(!User.getInstance().isLogin){
            this.setState({tips: '先登录再发布'})
            return false;
        } else {
            return true;
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    rowItem: {
        alignItems:'center',
        margin: 6,
        flexDirection: 'row',
    },
    label: {
        fontSize: 12
    },
    textInput: {
        flex:1,
        height: 30,
        fontSize: 12,
        paddingTop: 2,
        paddingLeft:6,
        paddingRight:6,
        backgroundColor:'#eeeeee'
    },
    button: {
        backgroundColor: '#4c8efa',
        fontSize: 12,
        color: 'white',
        fontWeight: 'normal',
        height: 30,
        paddingTop: 6,
        marginTop:10,
        marginLeft:6,
        marginRight:6,
    },
});