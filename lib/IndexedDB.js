//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function IndexedDB(inspector) {
    this._inspector = inspector;
    this._eventNames = [
    ];
}
util.inherits(IndexedDB, EventEmitter);
module.exports = IndexedDB;

//
// Enables events from backend. 
//
IndexedDB.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('IndexedDB.enable', paramObject, input.callback);
};

//
// Disables events from backend. 
//
IndexedDB.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('IndexedDB.disable', paramObject, input.callback);
};

//
// Requests database names for given frame's security origin. 
//
IndexedDB.prototype.requestDatabaseNamesForFrame = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0]
    };

    this._inspector._request('IndexedDB.requestDatabaseNamesForFrame', paramObject, input.callback);
};

//
// Requests database with given name in given frame. 
//
IndexedDB.prototype.requestDatabase = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0],
        'databaseName': input.args[1]
    };

    this._inspector._request('IndexedDB.requestDatabase', paramObject, input.callback);
};

//
// Requests data from object store or index. 
//
IndexedDB.prototype.requestData = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0],
        'databaseName': input.args[1],
        'objectStoreName': input.args[2],
        'indexName': input.args[3],
        'skipCount': input.args[4],
        'pageSize': input.args[5],
        'keyRange': input.args[6]
    };

    this._inspector._request('IndexedDB.requestData', paramObject, input.callback);
};

