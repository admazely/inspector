//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Runtime(inspector) {
    this._inspector = inspector;

    var events = [
        'executionContextCreated'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Runtime, EventEmitter);
module.exports = Runtime;

//
// Parses JavaScript source code for errors. 
//
Runtime.prototype.parse = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'source': input.args[0]
    };

    this._inspector._request('Runtime.parse', paramObject, input.callback);
};

//
// Evaluates expression on global object. 
//
Runtime.prototype.evaluate = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'expression': input.args[0],
        'objectGroup': input.args[1],
        'includeCommandLineAPI': input.args[2],
        'doNotPauseOnExceptionsAndMuteConsole': input.args[3],
        'contextId': input.args[4],
        'returnByValue': input.args[5],
        'generatePreview': input.args[6],
        'saveResult': input.args[7]
    };

    this._inspector._request('Runtime.evaluate', paramObject, input.callback);
};

//
// Calls function with given declaration on the given object. Object group of 
// the result is inherited from the target object. 
//
Runtime.prototype.callFunctionOn = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0],
        'functionDeclaration': input.args[1],
        'arguments': input.args[2],
        'doNotPauseOnExceptionsAndMuteConsole': input.args[3],
        'returnByValue': input.args[4],
        'generatePreview': input.args[5]
    };

    this._inspector._request('Runtime.callFunctionOn', paramObject, input.callback);
};

//
// Returns properties of a given object. Object group of the result is inherited 
// from the target object. 
//
Runtime.prototype.getProperties = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0],
        'ownProperties': input.args[1],
        'generatePreview': input.args[2]
    };

    this._inspector._request('Runtime.getProperties', paramObject, input.callback);
};

//
// Returns displayable properties of a given object. Object group of the result 
// is inherited from the target object. Displayable properties are own 
// properties, internal properties, and native getters in the prototype chain 
// (assumed to be bindings and treated like own properties for the frontend). 
//
Runtime.prototype.getDisplayableProperties = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0],
        'generatePreview': input.args[1]
    };

    this._inspector._request('Runtime.getDisplayableProperties', paramObject, input.callback);
};

//
// Returns entries of given Map / Set collection. 
//
Runtime.prototype.getCollectionEntries = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0],
        'objectGroup': input.args[1],
        'startIndex': input.args[2],
        'numberToFetch': input.args[3]
    };

    this._inspector._request('Runtime.getCollectionEntries', paramObject, input.callback);
};

//
// Assign a saved result index to this value. 
//
Runtime.prototype.saveResult = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'value': input.args[0],
        'contextId': input.args[1]
    };

    this._inspector._request('Runtime.saveResult', paramObject, input.callback);
};

//
// Releases remote object with given id. 
//
Runtime.prototype.releaseObject = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0]
    };

    this._inspector._request('Runtime.releaseObject', paramObject, input.callback);
};

//
// Releases all remote objects that belong to a given group. 
//
Runtime.prototype.releaseObjectGroup = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectGroup': input.args[0]
    };

    this._inspector._request('Runtime.releaseObjectGroup', paramObject, input.callback);
};

//
// Tells inspected instance(worker or page) that it can run in case it was 
// started paused. 
//
Runtime.prototype.run = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Runtime.run', paramObject, input.callback);
};

//
// Enables reporting of execution contexts creation by means of 
// `executionContextCreated` event. When the reporting gets enabled the event 
// will be sent immediately for each existing execution context. 
//
Runtime.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Runtime.enable', paramObject, input.callback);
};

//
// Disables reporting of execution contexts creation. 
//
Runtime.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Runtime.disable', paramObject, input.callback);
};

//
// Returns detailed informtation on given function. 
//
Runtime.prototype.getRuntimeTypesForVariablesAtOffsets = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'locations': input.args[0]
    };

    this._inspector._request('Runtime.getRuntimeTypesForVariablesAtOffsets', paramObject, input.callback);
};

//
// Enables type profiling on the VM. 
//
Runtime.prototype.enableTypeProfiler = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Runtime.enableTypeProfiler', paramObject, input.callback);
};

//
// Disables type profiling on the VM. 
//
Runtime.prototype.disableTypeProfiler = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Runtime.disableTypeProfiler', paramObject, input.callback);
};

//
// Returns a list of basic blocks for the given sourceID with information about 
// their text ranges and whether or not they have executed. 
//
Runtime.prototype.getBasicBlocks = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'sourceID': input.args[0]
    };

    this._inspector._request('Runtime.getBasicBlocks', paramObject, input.callback);
};

