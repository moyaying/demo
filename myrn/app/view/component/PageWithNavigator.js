/**
 * Created by moo on 15/12/4.
 */
'use strict';

import React, {
    Navigator,
} from 'react-native';

import appStyles from '../../res/style/AppStyle';

export default class PageWithNavigator extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (
            <Navigator
                style={[appStyles.windowContainer, this.props.containerStyle]}
                initialRoute={this.props.initialRoute}
                renderScene={(route, nav)=>{
                        let Component = route.component;
                        if(Component){
                            return <Component {...route.props} navigator={nav}/>
                        }
                    }}
                navigationBar={<Navigator.NavigationBar routeMapper={this.props.routeMapper} style={[appStyles.navBar, this.props.navigatorBarStyle]}/>}
                />
        );
    }
}