/**
 * Created by moo on 15/11/27.
 */
'use strict';

import {Platform} from 'react-native';

if(Platform.OS === 'ios'){
    var domain = 'http://127.0.0.1:3000/api/';          //ios
} else {
//    var domain = 'http://192.168.4.107:3000/api/';
//    var domain = 'http://192.168.31.225:3000/api/';    //android
    var domain = 'http://192.168.1.160:3000/api/';
}

export var URLS = {
    DOMAIN: domain,
    USER: `${domain}user`,
    USER_LOGIN: `${domain}user/login`,
    USER_REGISTER: `${domain}user/register`,

    TRAVEL_MESSAGE:`${domain}travelMessage`
}

export var Code = {
    SUCCESS: 1,
}