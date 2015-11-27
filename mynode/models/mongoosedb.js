/**
 * Created by moo on 15/11/27.
 */
'use strict';

var mongoose = require('mongoose');
var setting = require('../settings');

module.exports = {
    connect: function(){
        mongoose.connect(setting.db);
    }
};

