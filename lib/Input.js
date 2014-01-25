//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Input(inspector) {
    this._inspector = inspector;

    var events = [
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Input, EventEmitter);
module.exports = Input;

//
// Dispatches a key event to the page. 
//
Input.prototype.dispatchKeyEvent = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'type': input.args[0],
        'modifiers': input.args[1],
        'timestamp': input.args[2],
        'text': input.args[3],
        'unmodifiedText': input.args[4],
        'keyIdentifier': input.args[5],
        'windowsVirtualKeyCode': input.args[6],
        'nativeVirtualKeyCode': input.args[7],
        'macCharCode': input.args[8],
        'autoRepeat': input.args[9],
        'isKeypad': input.args[10],
        'isSystemKey': input.args[11]
    };

    this._inspector._request('Input.dispatchKeyEvent', paramObject, input.callback);
};

//
// Dispatches a mouse event to the page. 
//
Input.prototype.dispatchMouseEvent = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'type': input.args[0],
        'x': input.args[1],
        'y': input.args[2],
        'modifiers': input.args[3],
        'timestamp': input.args[4],
        'button': input.args[5],
        'clickCount': input.args[6]
    };

    this._inspector._request('Input.dispatchMouseEvent', paramObject, input.callback);
};

