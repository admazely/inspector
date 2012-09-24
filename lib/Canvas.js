//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Canvas(inspector) {
    this._inspector = inspector;

    var events = [
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Canvas, EventEmitter);
module.exports = Canvas;

//
// Enables Canvas inspection. 
//
Canvas.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Canvas.enable', paramObject, input.callback);
};

//
// Disables Canvas inspection. 
//
Canvas.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Canvas.disable', paramObject, input.callback);
};

Canvas.prototype.dropTraceLog = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'traceLogId': input.args[0]
    };

    this._inspector._request('Canvas.dropTraceLog', paramObject, input.callback);
};

Canvas.prototype.captureFrame = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Canvas.captureFrame', paramObject, input.callback);
};

Canvas.prototype.getTraceLog = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'traceLogId': input.args[0]
    };

    this._inspector._request('Canvas.getTraceLog', paramObject, input.callback);
};

Canvas.prototype.replayTraceLog = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'traceLogId': input.args[0],
        'stepNo': input.args[1]
    };

    this._inspector._request('Canvas.replayTraceLog', paramObject, input.callback);
};

