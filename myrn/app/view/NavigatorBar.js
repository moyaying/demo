/**
 * Created by moo on 15/12/2.
 */
'use strict';

import appStyles from '../res/style/AppStyle';

import React, {
    StyleSheet,
    View,
    Platform,
    Text,
    TouchableOpacity,
    Navigator,
    Image,
} from 'react-native';

var NavigationBarRouteMapper = {

    LeftButton: function (route, navigator, index, navState) {
        if (route.navigatorBar && route.navigatorBar.left) {
            return route.navigatorBar.left(route, navigator, index, navState);
        }

        if (index === 0) {
            return <View/>;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={appStyles.navBarLeftButton}>
                <View style={appStyles.navLeftBox}>
                    <Image style={appStyles.backBtn} source={require('../res/image/back.png')}/>
                    <Text style={[appStyles.navBarText]}>
                        {previousRoute.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    },

    RightButton: function (route, navigator, index, navState) {
        if (route.navigatorBar && route.navigatorBar.right) {
            return route.navigatorBar.right(route, navigator, index, navState);
        }

        return <View/>
    },

    Title: function (route, navigator, index, navState) {
        if (route.navigatorBar && route.navigatorBar.title && typeof route.navigatorBar.title === 'function') {
                return route.navigatorBar.title(route, navigator, index, navState);
        }

        let title = route.title;
        if (title) {
            return (
                <Text style={[appStyles.navBarTitleText]}>
                    {title}
                </Text>
            );
        } else {
            return <View/>;
        }
    },

};

export default NavigationBarRouteMapper;