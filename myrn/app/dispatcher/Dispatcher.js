/**
 * Created by moo on 15/11/29.
 */
'use strict';

var Promise = require('promise/domains');

var _callbacks = [];
var _promises = [];

var Dispatcher = function () {
};
Dispatcher.prototype = Object.assign({}, Dispatcher.prototype, {

    /**
     * Register a Store's callback so that it may be invoked by an action.
     * @param {function} callback The callback to be registered.
     * @return {number} The index of the callback within the _callbacks array.
     */
    addListener: function (callback) {
        _callbacks.push(callback);
        return _callbacks.length - 1; // index
    },

    removeListener: function (callback) {
        var index = _callbacks.indexOf(callback);
        if (index >= 0) {
            _callbacks.splice(index, 1);
            return true;
        }
        return false;
    },

    /**
     * dispatch
     * @param  {object} payload The data from the action.
     */
    dispatch: function (payload) {
        // First create array of promises for callbacks to reference.  这样就不会堵塞函数了! bingo!!!
        var resolves = [];
        var rejects = [];
        _promises = _callbacks.map(function (_, i) {
            return new Promise(function (resolve, reject) { //先new Promise，成功或失败的调用在后面再调用.
                resolves[i] = resolve;
                rejects[i] = reject;
            });
        });
        // Dispatch to callbacks and resolve/reject promises.
        _callbacks.forEach(function (callback, i) {
            // Callback can return an obj, to resolve, or a promise, to chain.
            // See waitFor() for why this might be useful.
            Promise.resolve(callback(payload))
                .then(function () {   //如果callback(playload) 没有异常，就调上面的resolve，否则reject.
                    resolves[i](payload);
                }, function () {
                    rejects[i](new Error('Dispatcher callback unsuccessful'));
                });
        });
        _promises = [];
    }
});

//var AppDispatcher = assign({}, Dispatcher.prototype, {
//
//    /**
//     * A bridge function between the views and the dispatcher, marking the action
//     * as a view action.  Another variant here could be handleServerAction.
//     * @param  {object} action The data coming from the view.
//     */
//    handleViewAction: function (action) {
//        this.dispatch({
//            source: 'VIEW_ACTION',
//            action: action
//        });
//    }
//
//});

export var PropType = Dispatcher.prototype;

export default Object.assign({}, PropType);
