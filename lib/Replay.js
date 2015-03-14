//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Replay(inspector) {
    this._inspector = inspector;

    var events = [
        'captureStarted',
        'captureStopped',
        'playbackHitPosition',
        'playbackStarted',
        'playbackPaused',
        'playbackFinished',
        'inputSuppressionChanged',
        'sessionCreated',
        'sessionModified',
        'sessionRemoved',
        'sessionLoaded',
        'segmentCreated',
        'segmentRemoved',
        'segmentCompleted',
        'segmentLoaded',
        'segmentUnloaded'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Replay, EventEmitter);
module.exports = Replay;

//
// Starts capture of a new replay session. 
//
Replay.prototype.startCapturing = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Replay.startCapturing', paramObject, input.callback);
};

//
// Stops capture of the currently recording replay session. 
//
Replay.prototype.stopCapturing = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Replay.stopCapturing', paramObject, input.callback);
};

//
// Seek execution to a specific position within the replay session. 
//
Replay.prototype.replayToPosition = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'position': input.args[0],
        'shouldFastForward': input.args[1]
    };

    this._inspector._request('Replay.replayToPosition', paramObject, input.callback);
};

//
// Replay all session segments completely. 
//
Replay.prototype.replayToCompletion = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'shouldFastForward': input.args[0]
    };

    this._inspector._request('Replay.replayToCompletion', paramObject, input.callback);
};

//
// Pauses playback in the current segment. Can be resumed by using a replay 
// command. 
//
Replay.prototype.pausePlayback = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Replay.pausePlayback', paramObject, input.callback);
};

//
// Cancels playback of the current segment. Further replaying will start from 
// the beginning of the current segment. 
//
Replay.prototype.cancelPlayback = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Replay.cancelPlayback', paramObject, input.callback);
};

//
// Unloads the current replay session and loads the specified session 
//
Replay.prototype.switchSession = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'sessionIdentifier': input.args[0]
    };

    this._inspector._request('Replay.switchSession', paramObject, input.callback);
};

//
// Splices the specified session segment into the session at the specified 
// index. 
//
Replay.prototype.insertSessionSegment = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'sessionIdentifier': input.args[0],
        'segmentIdentifier': input.args[1],
        'segmentIndex': input.args[2]
    };

    this._inspector._request('Replay.insertSessionSegment', paramObject, input.callback);
};

//
// Removes the session segment at the specified position from the session. 
//
Replay.prototype.removeSessionSegment = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'sessionIdentifier': input.args[0],
        'segmentIndex': input.args[1]
    };

    this._inspector._request('Replay.removeSessionSegment', paramObject, input.callback);
};

//
// Returns the identifier, position, session state and segment state of the 
// currently loaded session. This is necessary because the inspector may be 
// closed and reopened in the middle of replay. 
//
Replay.prototype.currentReplayState = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Replay.currentReplayState', paramObject, input.callback);
};

//
// Returns identifiers of all available sessions. 
//
Replay.prototype.getAvailableSessions = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Replay.getAvailableSessions', paramObject, input.callback);
};

//
// Returns an object for the specified session. 
//
Replay.prototype.getSessionData = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'sessionIdentifier': input.args[0]
    };

    this._inspector._request('Replay.getSessionData', paramObject, input.callback);
};

//
// Returns an object for the specified session segment. 
//
Replay.prototype.getSegmentData = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'id': input.args[0]
    };

    this._inspector._request('Replay.getSegmentData', paramObject, input.callback);
};

