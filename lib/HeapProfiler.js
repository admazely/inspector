//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function HeapProfiler(inspector) {
    this._inspector = inspector;

    var events = [
        'addProfileHeader',
        'addHeapSnapshotChunk',
        'finishHeapSnapshot',
        'resetProfiles',
        'reportHeapSnapshotProgress'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(HeapProfiler, EventEmitter);
module.exports = HeapProfiler;

HeapProfiler.prototype.hasHeapProfiler = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('HeapProfiler.hasHeapProfiler', paramObject, input.callback);
};

HeapProfiler.prototype.getProfileHeaders = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('HeapProfiler.getProfileHeaders', paramObject, input.callback);
};

HeapProfiler.prototype.getHeapSnapshot = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'uid': input.args[0]
    };

    this._inspector._request('HeapProfiler.getHeapSnapshot', paramObject, input.callback);
};

HeapProfiler.prototype.removeProfile = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'uid': input.args[0]
    };

    this._inspector._request('HeapProfiler.removeProfile', paramObject, input.callback);
};

HeapProfiler.prototype.clearProfiles = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('HeapProfiler.clearProfiles', paramObject, input.callback);
};

HeapProfiler.prototype.takeHeapSnapshot = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'reportProgress': input.args[0]
    };

    this._inspector._request('HeapProfiler.takeHeapSnapshot', paramObject, input.callback);
};

HeapProfiler.prototype.collectGarbage = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('HeapProfiler.collectGarbage', paramObject, input.callback);
};

HeapProfiler.prototype.getObjectByHeapObjectId = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0],
        'objectGroup': input.args[1]
    };

    this._inspector._request('HeapProfiler.getObjectByHeapObjectId', paramObject, input.callback);
};

HeapProfiler.prototype.getHeapObjectId = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0]
    };

    this._inspector._request('HeapProfiler.getHeapObjectId', paramObject, input.callback);
};

