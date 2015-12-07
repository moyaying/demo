/**
 * Created by moo on 15/12/1.
 */
'use strict';

import React, {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import appStyles from '../res/style/AppStyle';

import User from '../model/User';

export default class TravelInfoDetail extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[appStyles.windowContainerWithTitleBar, styles.container]}>
                <View style={styles.item}>
                    <Text style={styles.text}>出发时间:</Text>
                    <Text style={styles.text}>{this.props.travelMessage.startTime}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>出发地点:</Text>
                    <Text style={styles.text}>{this.props.travelMessage.startSpace}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>旅程信息:</Text>
                    <Text style={styles.text}>{this.props.travelMessage.message}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}>发布者:</Text>
                    <Text style={styles.text}>{this.props.travelMessage.user.name}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>联系方式:</Text>
                    <Text style={styles.text}>{this.props.travelMessage.user.phone}</Text>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 8,
    },
    item: {
        backgroundColor: 'white',
        marginBottom:4,
        flexDirection: 'row',
        padding: 10,
    },
    text:{
        fontSize: 12,
        marginLeft:10,
    }
});