/**
 * Created by moo on 15/11/27.
 */
'use strict';

class Message {
    constructor(code, message, data) {
        this.code = code;
        this.message = message;
        //if(status){
        //    this.status = status;
        //} else {
        //    this.status = 200;
        //}

        this.data = data;
    }
}

exports.Message = Message;
