/**
 * Created by moo on 15/12/3.
 */
'use strict';

import CommonDataMapper from '../data/mapper/CommonDataMapper';
import {URLS, Code} from '../data/Api';

export var handleMessageJsonFetch = function (fetchfunc, callback) {
    fetchfunc
        .then(function (response) {
            return response.json();
        })
        .then(function (dataJson) {
            var {message, data} = CommonDataMapper.mapData(dataJson);
            if (message.code != Code.SUCCESS) {
                throw new Error(message.message, message.code);
            } else {
                callback(null, data);
            }
        })
        .catch(function (err) {
            callback(err);
        })
        .done();
}