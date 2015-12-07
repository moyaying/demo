/**
 * Created by moo on 15/12/2.
 */
'use strict';

//------------------------------------------------
//  Schema
//------------------------------------------------
var collections = require('../settings').collections;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require('./user').User;

var schema = new mongoose.Schema({
    startTime: {type: String, require: true},
    startSpace: {type: String, require: true},
    message: String,
    user: {type: Schema.Types.ObjectId, ref: collections.USER}
}, {
    collection: collections.TRAVEL_MESSAGE
});

var TravelMessage = mongoose.model(collections.TRAVEL_MESSAGE, schema);

exports.TravelMessage = TravelMessage;

exports.getAll = function (callback) {
    TravelMessage
        .find({}, {__v:0})
        .populate('user', {__v:0, password:0})
        .exec(callback);
}

exports.create = function(travelMessageObj, callback){
    console.log(travelMessageObj);

    let startTime = travelMessageObj.startTime,
        startSpace = travelMessageObj.startSpace,
        message = travelMessageObj.message,
        userId = travelMessageObj.userId;

    var travelMessage = new TravelMessage({startTime: startTime, startSpace: startSpace, message: message, user:userId});
    travelMessage.save(callback);
}