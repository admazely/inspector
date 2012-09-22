//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Runtime(inspector) {
    this._inspector = inspector;
    this._eventNames = [
        'Runtime.executionContextCreated'
    ];
}
util.inherits(Runtime, EventEmitter);
module.exports = Runtime;

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
        'returnByValue': input.args[5]
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
        'returnByValue': input.args[4]
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
        'ownProperties': input.args[1]
    };

    this._inspector._request('Runtime.getProperties', paramObject, input.callback);
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
// Enables reporting about creation of execution contexts by means of 
// `executionContextCreated` event. When the reporting gets enabled the event 
// will be sent immediately for each existing execution context. 
//
Runtime.prototype.setReportExecutionContextCreation = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'enabled': input.args[0]
    };

    this._inspector._request('Runtime.setReportExecutionContextCreation', paramObject, input.callback);
};

