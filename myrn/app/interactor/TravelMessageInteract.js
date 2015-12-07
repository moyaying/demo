/**
 * Created by moo on 15/12/3.
 */
'use strict';


import {URLS, Code} from '../data/Api';

import {handleMessageJsonFetch} from '../util/FetchUtil';
import TravelMessage from '../model/TravelMessage';
import TravelMessageMapper from '../data/mapper/TravelMessageMapper';

export default class TravelMessageInteract{
    static getAllTravelMessage(callback){
        handleMessageJsonFetch(fetch(URLS.TRAVEL_MESSAGE), (err, data) => {
            if(err){
                callback(err);
            } else {
                let travelMessages = data;
                let travelMessageEntityList = TravelMessageMapper.mapTravelMessages(travelMessages);
                callback(null, travelMessageEntityList);
            }
        });
    }

    static addTravelMessage(startTime, startSpace, message, userId, callback){
        let body = {
            startTime: startTime,
            startSpace: startSpace,
            message: message,
            userId: userId,
        };
        console.log(body);

        let f = fetch(URLS.TRAVEL_MESSAGE, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            }
        );

        handleMessageJsonFetch(f, callback);
    }
}