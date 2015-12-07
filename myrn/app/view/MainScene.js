/**
 * Created by moo on 15/11/30.
 */
'use strict';

import React, {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ListView,
} from 'react-native';

import User from '../model/User';
import TravelInfoDetail from './TravelInfoDetail';
import UserInteract from '../interactor/UserInteract'
import TravelMessageInteract from '../interactor/TravelMessageInteract';

import {VARS} from '../res/style/StyleVars';

import appStyles from '../res/style/AppStyle';

import Login from './Login';
import PostTravelMessage from './PostTravelMessage';

var dataList = [];
//for (let i = 0; i < 20; i++) {
//    let user = new User('User' + i, i, 'http://127.0.0.1:3000/image/thumb.png');
//    userList.push(user);
//}

export default class MainScene extends React.Component {
    static getRightBarView(route, navigator, index, navState) {
        //navigatorbar
        return (
            <TouchableOpacity
                onPress={() =>{
                        if(User.getInstance().isLogin){
                            navigator.push(PostTravelMessage.getRouter());
                        } else {
                            navigator.push(Login.getRouter());
                        }
                         //navigator.push(PostTravelMessage.getRouter());
                    }
                }
                style={appStyles.navBarRightButton}>
                <Text style={[appStyles.navBarText]}>
                    添加
                </Text>
            </TouchableOpacity>
        );
    }

    constructor() {
        super();

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows(dataList),
        };

        this._renderRow = this._renderRow.bind(this);        //这句必须加上,不然onPress没效果
    }

    componentWillMount(){
        console.log('will mount');
    }

    render() {
        console.log('render');
        return (
            <View style={[appStyles.windowContainerWithTitleBar, styles.container]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={renderSeparator}/>
            </View>
        );
    }

    componentDidMount(){
        console.log('did mount');
        this._fetchData();
    }

    componentWillUnmount(){
        console.log('will unmount');
    }

    _fetchData(){
        //UserInteract.getAllUsers((err, users)=>{
        //    if(err){
        //        console.log(err);
        //    } else {
        //        this._updateDatas(users);
        //    }
        //});
        TravelMessageInteract.getAllTravelMessage((err, datas) => {
            if(err){
                console.log(err);
            } else {
                this._updateDatas(datas);
            }
        });
    }

    _updateDatas(datas){
        dataList = datas;
        this._notifyViewChange();
    }

    _notifyViewChange(){
        this.setState({dataSource: this.ds.cloneWithRows(dataList)});
    }


    _renderRow(rowData, sectionID, rowID) {
        var travelMessage = rowData;
        return (
            <TouchableHighlight
                key={'SEP_' + sectionID + '_' + rowID}
                onPress={()=>this._onGotoTravelInfoDetailPress(travelMessage)}>
                <View style={styles.itemRow}>
                    <Image style={styles.thumb} source={{uri: travelMessage.user.thumb}}/>
                    <View>
                        <Text style={styles.itemText}>
                            出发时间: {travelMessage.startTime}
                        </Text>
                        <Text style={styles.itemText}>
                            出发地点: {travelMessage.startSpace}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _onGotoTravelInfoDetailPress(travelMessage) {
        let props = {travelMessage: travelMessage};
        this.props.navigator.push({
            id: 'travelInfoDetail',
            title: '乘车信息',
            component: TravelInfoDetail,
            props: props,
            navigatorBar: {}
        });
    }
}

function renderSeparator(sectionID, rowID, adjacentRowHighlighted){
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
        <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: '#ff0000'
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        padding: 6,
    },
    thumb: {
        width: 20,
        height: 20,
    },
    itemText: {
        marginLeft: 10,
        fontSize: 14,
    },
    rowSeparator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 1,
        marginLeft: 4,
        marginRight: 4,
    },
    rowSeparatorHide: {
        opacity: 0.0,
    },
});