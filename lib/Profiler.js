//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Profiler(inspector) {
    this._inspector = inspector;

    var events = [
        'addProfileHeader',
        'addHeapSnapshotChunk',
        'finishHeapSnapshot',
        'setRecordingProfile',
        'resetProfiles',
        'reportHeapSnapshotProgress'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Profiler, EventEmitter);
module.exports = Profiler;

Profiler.prototype.causesRecompilation = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.causesRecompilation', paramObject, input.callback);
};

Profiler.prototype.isSampling = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.isSampling', paramObject, input.callback);
};

Profiler.prototype.hasHeapProfiler = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.hasHeapProfiler', paramObject, input.callback);
};

Profiler.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.enable', paramObject, input.callback);
};

Profiler.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.disable', paramObject, input.callback);
};

Profiler.prototype.start = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.start', paramObject, input.callback);
};

Profiler.prototype.stop = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.stop', paramObject, input.callback);
};

Profiler.prototype.getProfileHeaders = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.getProfileHeaders', paramObject, input.callback);
};

Profiler.prototype.getProfile = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'type': input.args[0],
        'uid': input.args[1]
    };

    this._inspector._request('Profiler.getProfile', paramObject, input.callback);
};

Profiler.prototype.removeProfile = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'type': input.args[0],
        'uid': input.args[1]
    };

    this._inspector._request('Profiler.removeProfile', paramObject, input.callback);
};

Profiler.prototype.clearProfiles = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.clearProfiles', paramObject, input.callback);
};

Profiler.prototype.takeHeapSnapshot = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.takeHeapSnapshot', paramObject, input.callback);
};

Profiler.prototype.collectGarbage = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Profiler.collectGarbage', paramObject, input.callback);
};

Profiler.prototype.getObjectByHeapObjectId = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0],
        'objectGroup': input.args[1]
    };

    this._inspector._request('Profiler.getObjectByHeapObjectId', paramObject, input.callback);
};

Profiler.prototype.getHeapObjectId = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0]
    };

    this._inspector._request('Profiler.getHeapObjectId', paramObject, input.callback);
};

