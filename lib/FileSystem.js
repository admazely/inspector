//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function FileSystem(inspector) {
    this._inspector = inspector;

    var events = [
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(FileSystem, EventEmitter);
module.exports = FileSystem;

//
// Enables events from backend. 
//
FileSystem.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('FileSystem.enable', paramObject, input.callback);
};

//
// Disables events from backend. 
//
FileSystem.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('FileSystem.disable', paramObject, input.callback);
};

//
// Returns root directory of the FileSystem, if exists. 
//
FileSystem.prototype.requestFileSystemRoot = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'origin': input.args[0],
        'type': input.args[1]
    };

    this._inspector._request('FileSystem.requestFileSystemRoot', paramObject, input.callback);
};

//
// Returns content of the directory. 
//
FileSystem.prototype.requestDirectoryContent = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'url': input.args[0]
    };

    this._inspector._request('FileSystem.requestDirectoryContent', paramObject, input.callback);
};

//
// Returns metadata of the entry. 
//
FileSystem.prototype.requestMetadata = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'url': input.args[0]
    };

    this._inspector._request('FileSystem.requestMetadata', paramObject, input.callback);
};

//
// Returns content of the file. Result should be sliced into [start, end). 
//
FileSystem.prototype.requestFileContent = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'url': input.args[0],
        'readAsText': input.args[1],
        'start': input.args[2],
        'end': input.args[3],
        'charset': input.args[4]
    };

    this._inspector._request('FileSystem.requestFileContent', paramObject, input.callback);
};

//
// Deletes specified entry. If the entry is a directory, the agent deletes 
// children recursively. 
//
FileSystem.prototype.deleteEntry = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'url': input.args[0]
    };

    this._inspector._request('FileSystem.deleteEntry', paramObject, input.callback);
};

