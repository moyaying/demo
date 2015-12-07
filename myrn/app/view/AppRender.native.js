/**
 * Created by moo on 15/11/29.
 */
'use strict';

import React, {
    StyleSheet,
    View,
    Platform,
    Text,
    TouchableOpacity,
    Navigator,
    Image,
} from 'react-native';

import PageWithNavigator from './component/PageWithNavigator';
import MainScene from './MainScene';
import MyScene from './MyScene';

import appStyles from '../res/style/AppStyle';

var Tabs = require('react-native-tabs');

import NavigationBarRouteMapper from './NavigatorBar';

export default function () {
    let scene = getTabPage(this.state.page);
    return (
        <View style={{flex:1}}>
            {scene}
            <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                  onSelect={(el)=>{
                        this.setState({page: el.props.name});
                        return {style:{color:'red'}}
                    }
                }>
                <Text name="travel">乘车</Text>
                <Text name="my">我的</Text>
            </Tabs>
        </View>
    );
}

let travelScene =
    <PageWithNavigator
        initialRoute={{id:"travel", title:'主页', component:MainScene, navigatorBar:{right: MainScene.getRightBarView}}}
        routeMapper={NavigationBarRouteMapper}/>;
let myScene =
    //<PageWithNavigator
    //    initialRoute={{id:"my", title:'我的', component:MyScene, navigatorBar:{}}}
    //    routeMapper={NavigationBarRouteMapper}/>;
    <Navigator
        style={[appStyles.windowContainer]}
        initialRoute={{id:"my", title:'我的', component:MyScene, navigatorBar:{}}}
        renderScene={(route, nav)=>{
                        let Component = route.component;
                        if(Component){
                            return <Component {...route.props} navigator={nav}/>
                        }
                    }}
        navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} style={[appStyles.navBar]}/>}
        />

function getTabPage(page) {
    let scene;
    switch (page) {
        case 'travel':
        {
            //if (!travelScene) {
            //    travelScene =
            //        <PageWithNavigator
            //            initialRoute={{id:"travel", title:'主页', component:MainScene, navigatorBar:{right: MainScene.getRightBarView}}}
            //            routeMapper={NavigationBarRouteMapper}/>
            //}
            scene = travelScene;
            break;
        }
        case 'my':
        {
            //if (!myScene) {
            //    myScene =
            //        //<MyScene/>
            //        <PageWithNavigator
            //            initialRoute={{id:"my", title:'我的', component:MyScene, navigatorBar:{}}}
            //            routeMapper={NavigationBarRouteMapper}/>
            //}
            scene = myScene;
            break;
        }

        default :
            scene = <View/>;
            break;
    }

    return scene;
}

//var styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        height: 50,
//    },
//});