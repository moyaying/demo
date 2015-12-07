/**
 * Created by moo on 15/12/3.
 */
'use strict';

import UserMapper from './UserMapper';
import TravelMessage from '../../model/TravelMessage';

export default class TravelMessageMapper{
    static mapTravelMessages(datas){
        var dataList = [];
        for (let key in datas) {
            let data = datas[key];
            let user = UserMapper.mapUser(data.user);
            let travelMessage = new TravelMessage(data._id, data.startTime, data.startSpace, data.message, user);
            dataList.push(travelMessage);
        }

        return dataList;
    }
}