/**
 * Created by moo on 15/11/29.
 */
'use strict';

import React, {
    StyleSheet,
    View,
    Platform,
    Text,
} from 'react-native';

export default function () {
    return (
        <View style={styles.container}>
            <Text>Welcome {this.state.username}, age is {this.state.age}</Text>
            <Text>This is native App MainScene</Text>
        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
});