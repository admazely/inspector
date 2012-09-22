//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Inspector(inspector) {
    this._inspector = inspector;
    this._eventNames = [
        'Inspector.evaluateForTestInFrontend',
        'Inspector.inspect'
    ];
}
util.inherits(Inspector, EventEmitter);
module.exports = Inspector;

//
// Enables inspector domain notifications. 
//
Inspector.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Inspector.enable', paramObject, input.callback);
};

//
// Disables inspector domain notifications. 
//
Inspector.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Inspector.disable', paramObject, input.callback);
};

