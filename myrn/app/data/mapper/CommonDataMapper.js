/**
 * Created by moo on 15/11/29.
 */
'use strict';

import JsonUtil from '../../util/JsonUtil';
import Message from '../../model/Message';

export default class CommonDataMapper{
    static mapData(responseJson){
        if (JsonUtil.isJson(responseJson)) {
            var message = new Message(responseJson.code, responseJson.message);
            return {message: message, data: responseJson.data};
        } else {
            return null;
        }
    }
}