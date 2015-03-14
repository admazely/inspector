//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Inspector(inspector) {
    this._inspector = inspector;

    var events = [
        'evaluateForTestInFrontend',
        'inspect',
        'detached',
        'activateExtraDomains',
        'targetCrashed'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
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

//
// Sent by the frontend after all initialization messages have been sent. 
//
Inspector.prototype.initialized = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Inspector.initialized', paramObject, input.callback);
};

