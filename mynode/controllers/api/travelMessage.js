/**
 * Created by moo on 15/12/4.
 */
'use strict';

var model = require('../../models/travelMessage');
var TravelMessage = model.TravelMessage;
var Code = require('../../const.js').Code;
var Message = require('../../models/res-data').Message;

exports.getAllTravelMessages = function (req, res, next) {
    model.getAll((err, datas) => {
        if (err) {
            return next(err);
        } else {
            let message = new Message(Code.SUCCESS, '获取乘车列表成功', datas);
            res.json(message);
        }
    });
}

exports.create = function (req, res, next) {
    let travelObj = {};
    travelObj.startTime = req.body.startTime;
    travelObj.startSpace = req.body.startSpace;
    travelObj.message = req.body.message;
    travelObj.userId = req.body.userId;
    model.create(travelObj, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(new Message(Code.SUCCESS, '乘车信息创建成功', data));
        }
    });
}