/**
 * Created by moo on 15/11/30.
 */
'use strict';

import {VARS} from './StyleVars';

import TitleBarStyle from './TitleBarStyle';

import {StyleSheet} from 'react-native';

function getStyles() {
    return Object.assign({
            //定义全局样式
            windowContainer:{
                backgroundColor: VARS.windowBackgroundColor,
            },
            windowContainerWithTitleBar: {
                backgroundColor: VARS.windowBackgroundColor,
                paddingTop: VARS.titleBarHeight,
            },
        },
        TitleBarStyle
        //add other styles
    );
}

export default StyleSheet.create(getStyles());
//export var cssVars = VARS;