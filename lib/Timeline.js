//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Timeline(inspector) {
    this._inspector = inspector;

    var events = [
        'eventRecorded'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Timeline, EventEmitter);
module.exports = Timeline;

//
// Starts capturing instrumentation events. 
//
Timeline.prototype.start = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'maxCallStackDepth': input.args[0]
    };

    this._inspector._request('Timeline.start', paramObject, input.callback);
};

//
// Stops capturing instrumentation events. 
//
Timeline.prototype.stop = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Timeline.stop', paramObject, input.callback);
};

//
// Starts calculating various DOM statistics and sending them as part of 
// timeline events. 
//
Timeline.prototype.setIncludeMemoryDetails = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'enabled': input.args[0]
    };

    this._inspector._request('Timeline.setIncludeMemoryDetails', paramObject, input.callback);
};

//
// Tells whether timeline agent supports frame instrumentation. 
//
Timeline.prototype.supportsFrameInstrumentation = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Timeline.supportsFrameInstrumentation', paramObject, input.callback);
};

