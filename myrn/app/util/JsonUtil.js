/**
 * Created by moo on 15/11/27.
 */
'use strict';

export default class JsonUtil {
    static isJson(obj) {
        return (typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length);
    }
}
