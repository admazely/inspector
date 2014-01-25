//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function ApplicationCache(inspector) {
    this._inspector = inspector;

    var events = [
        'applicationCacheStatusUpdated',
        'networkStateUpdated'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(ApplicationCache, EventEmitter);
module.exports = ApplicationCache;

//
// Returns array of frame identifiers with manifest urls for each frame 
// containing a document associated with some application cache. 
//
ApplicationCache.prototype.getFramesWithManifests = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('ApplicationCache.getFramesWithManifests', paramObject, input.callback);
};

//
// Enables application cache domain notifications. 
//
ApplicationCache.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('ApplicationCache.enable', paramObject, input.callback);
};

//
// Returns manifest URL for document in the given frame. 
//
ApplicationCache.prototype.getManifestForFrame = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0]
    };

    this._inspector._request('ApplicationCache.getManifestForFrame', paramObject, input.callback);
};

//
// Returns relevant application cache data for the document in given frame. 
//
ApplicationCache.prototype.getApplicationCacheForFrame = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0]
    };

    this._inspector._request('ApplicationCache.getApplicationCacheForFrame', paramObject, input.callback);
};

