/**
 * Created by moo on 15/11/27.
 */
'use strict';

var isJson = function (obj) {
    return (typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length);
}

module.exports = {
    isJson: isJson
};