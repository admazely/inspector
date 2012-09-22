//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function DOMStorage(inspector) {
    this._inspector = inspector;
    this._eventNames = [
        'DOMStorage.addDOMStorage',
        'DOMStorage.domStorageUpdated'
    ];
}
util.inherits(DOMStorage, EventEmitter);
module.exports = DOMStorage;

//
// Enables storage tracking, storage events will now be delivered to the client. 
//
DOMStorage.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('DOMStorage.enable', paramObject, input.callback);
};

//
// Disables storage tracking, prevents storage events from being sent to the 
// client. 
//
DOMStorage.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('DOMStorage.disable', paramObject, input.callback);
};

DOMStorage.prototype.getDOMStorageEntries = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'storageId': input.args[0]
    };

    this._inspector._request('DOMStorage.getDOMStorageEntries', paramObject, input.callback);
};

DOMStorage.prototype.setDOMStorageItem = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'storageId': input.args[0],
        'key': input.args[1],
        'value': input.args[2]
    };

    this._inspector._request('DOMStorage.setDOMStorageItem', paramObject, input.callback);
};

DOMStorage.prototype.removeDOMStorageItem = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'storageId': input.args[0],
        'key': input.args[1]
    };

    this._inspector._request('DOMStorage.removeDOMStorageItem', paramObject, input.callback);
};

