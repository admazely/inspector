//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Canvas(inspector) {
    this._inspector = inspector;

    var events = [
        'contextCreated',
        'traceLogsRemoved'
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

//
// Checks if there is any uninstrumented canvas in the inspected page. 
//
Canvas.prototype.hasUninstrumentedCanvases = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Canvas.hasUninstrumentedCanvases', paramObject, input.callback);
};

//
// Starts (or continues) a canvas frame capturing which will be stopped 
// automatically after the next frame is prepared. 
//
Canvas.prototype.captureFrame = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0]
    };

    this._inspector._request('Canvas.captureFrame', paramObject, input.callback);
};

//
// Starts (or continues) consecutive canvas frames capturing. The capturing is 
// stopped by the corresponding stopCapturing command. 
//
Canvas.prototype.startCapturing = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0]
    };

    this._inspector._request('Canvas.startCapturing', paramObject, input.callback);
};

Canvas.prototype.stopCapturing = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'traceLogId': input.args[0]
    };

    this._inspector._request('Canvas.stopCapturing', paramObject, input.callback);
};

Canvas.prototype.getTraceLog = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'traceLogId': input.args[0],
        'startOffset': input.args[1],
        'maxLength': input.args[2]
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

Canvas.prototype.getResourceInfo = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'resourceId': input.args[0]
    };

    this._inspector._request('Canvas.getResourceInfo', paramObject, input.callback);
};

Canvas.prototype.getResourceState = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'traceLogId': input.args[0],
        'resourceId': input.args[1]
    };

    this._inspector._request('Canvas.getResourceState', paramObject, input.callback);
};

