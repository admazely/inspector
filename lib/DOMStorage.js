//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function DOMStorage(inspector) {
    this._inspector = inspector;

    var events = [
        'domStorageItemsCleared',
        'domStorageItemRemoved',
        'domStorageItemAdded',
        'domStorageItemUpdated'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
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

DOMStorage.prototype.getDOMStorageItems = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'storageId': input.args[0]
    };

    this._inspector._request('DOMStorage.getDOMStorageItems', paramObject, input.callback);
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

