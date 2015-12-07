/**
 * Created by moo on 15/12/3.
 */
'use strict';

export default class TravelMessage {
    constructor(_id, startTime, startSpace, message, user) {
        this._id = _id;
        this.startTime = startTime;
        this.startSpace = startSpace;
        this.message = message;
        this.user = user;
    }
}