//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Console(inspector) {
    this._inspector = inspector;

    var events = [
        'messageAdded',
        'messageRepeatCountUpdated',
        'messagesCleared'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Console, EventEmitter);
module.exports = Console;

//
// Enables console domain, sends the messages collected so far to the client by 
// means of the `messageAdded` notification. 
//
Console.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Console.enable', paramObject, input.callback);
};

//
// Disables console domain, prevents further console messages from being 
// reported to the client. 
//
Console.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Console.disable', paramObject, input.callback);
};

//
// Clears console messages collected in the browser. 
//
Console.prototype.clearMessages = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Console.clearMessages', paramObject, input.callback);
};

//
// Toggles monitoring of XMLHttpRequest. If `true`, console will receive 
// messages upon each XHR issued. 
//
Console.prototype.setMonitoringXHREnabled = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'enabled': input.args[0]
    };

    this._inspector._request('Console.setMonitoringXHREnabled', paramObject, input.callback);
};

//
// Enables console to refer to the node with given id via $x (see Command Line 
// API for more details $x functions). 
//
Console.prototype.addInspectedNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('Console.addInspectedNode', paramObject, input.callback);
};

