/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    ToastAndroid,
    PixelRatio,
    } = React;


//var userActor = require('./app/interactor/user-actor');
//userActor.getAllUsers()
//    .then(function (users) {
//        for (let user of users) {
//            console.dir(user);
//        }
//    })
//    .catch(function (err) {   //获取数据错误
//        console.log(err);
//    })
//    .done();

var NavButton = require('./app/view/index').NavButton;

//var app = React.createClass({
//    getInitialState: function () {
//        return {
//            actionText: "Example app with toolbar component"
//        };
//    },
//    render: function () {
//        return (
//            <ToolbarAndroid
//                actions={toolbarActions}
//                //logo={require('./app/res/image/launcher_icon.png')}
//                navIcon={require('./app/res/image/ic_menu_black_24dp.png')}
//                onActionSelected={this._onActionSelected}
//                onIconClicked={() => ToastAndroid.show("on icon clicked", ToastAndroid.SHORT)}
//                style={styles.toolbar}
//                //subtitle={this.state.actionText}
//                title="Toolbar"/>
//        );
//    },
//    _onActionSelected: function (position) {
//        //console.log('you click position:' + position);
//        ToastAndroid.show("you click position" + position, ToastAndroid.SHORT);
//    }
//});
//
//var toolbarActions = [{
//    title: "setting",
//    icon: require('./app/res/image/ic_settings_black_48dp.png'),
//    show: "ifRoom",
//    showWithText: false
//}];

class App extends React.Component{
    constructor(){
        super();

        this.name = "laomo";
    }

    render(){
        return (
            <NavButton onPress={this.onButtonPress.bind(this)} text="button"/>
        );
    }

    onButtonPress(){
        ToastAndroid.show("you click button:" + this.name + " PixelRatio:" + PixelRatio.get(), ToastAndroid.SHORT);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 60,
    },
});

AppRegistry.registerComponent('myrn', () => App);
