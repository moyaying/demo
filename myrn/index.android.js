/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var userActor = require('./app/interactor/user-actor');

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    } = React;

userActor.getAllUsers()
    .then(function (users) {
        for (let user of users) {
            console.dir(user);
        }
    })
    .catch(function (err) {   //获取数据错误
        console.log(err);
    })
    .done();

var app = React.createClass({
    getInitialState: function () {
        return {
            actionText: "Example app with toolbar component"
        };
    },
    render: function () {
        return (
            <ToolbarAndroid
                actions={toolbarActions}
                logo={require('./app/res/image/launcher_icon.png')}
                navIcon={require('./app/res/image/ic_menu_black_24dp.png')}
                onActionSelected={this._onActionSelected}
                onIconClicked={() => console.log('on icon clicked')}
                style={styles.toolbar}
                subtitle={this.state.actionText}
                title="Toolbar"/>
        );
    },
    _onActionSelected: function (position) {
        console.log('you click position:' + position);
    }
});

var toolbarActions = [];

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#FF0000',
        height: 60,
    },
});

AppRegistry.registerComponent('myrn', () => app);
