/**
 * Created by moo on 15/11/30.
 */
'use strict'

import {VARS} from './StyleVars';

export default {
    navBar:{
        backgroundColor: 'white',
        height: VARS.titleBarHeight,
    },
    navBarText: {
        fontSize: 12,
        marginVertical: 10,
        marginLeft: 4,
        color: '#5890ff',
    },
    navBarTitleText: {
        color: '#373e4d',
        fontWeight: '400',
        marginVertical: 9,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navLeftBox:{
        flex:1,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: 'flex-start',
    },
    backBtn:{
        width: 12,
        height: 12,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
};