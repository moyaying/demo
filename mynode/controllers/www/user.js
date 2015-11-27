/**
 * Created by moo on 15/11/27.
 */
'use strict';

var userModel = require('../../models/user');

//--------------------------------------------------
//  for www
//--------------------------------------------------

exports.user = function(req, res, next){
    userModel.listAll(function (err, users) {
        if (err) {
            return next(err);
        } else {
            res.send('www: find users ' + users);
        }
    });
}

