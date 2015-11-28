/**
 * Created by moo on 15/11/27.
 */
'use strict';

var domain = 'http://192.168.4.107:3000/api/';

var httpConst = {
    DOMAIN: domain,
    USER: `${domain}user`,
}

var code = {
    SUCCESS: 10000,
}

exports.HTTP_CONST = httpConst;
exports.CODE = code;