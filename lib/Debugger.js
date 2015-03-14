//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Debugger(inspector) {
    this._inspector = inspector;

    var events = [
        'globalObjectCleared',
        'scriptParsed',
        'scriptFailedToParse',
        'breakpointResolved',
        'paused',
        'resumed',
        'didSampleProbe',
        'playBreakpointActionSound'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Debugger, EventEmitter);
module.exports = Debugger;

//
// Enables debugger for the given page. Clients should not assume that the 
// debugging has been enabled until the result for this command is received. 
//
Debugger.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Debugger.enable', paramObject, input.callback);
};

//
// Disables debugger for given page. 
//
Debugger.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Debugger.disable', paramObject, input.callback);
};

//
// Activates / deactivates all breakpoints on the page. 
//
Debugger.prototype.setBreakpointsActive = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'active': input.args[0]
    };

    this._inspector._request('Debugger.setBreakpointsActive', paramObject, input.callback);
};

//
// Sets JavaScript breakpoint at given location specified either by URL or URL 
// regex. Once this command is issued, all existing parsed scripts will have 
// breakpoints resolved and returned in `locations` property. Further matching 
// script parsing will result in subsequent `breakpointResolved` events issued. 
// This logical breakpoint will survive page reloads. 
//
Debugger.prototype.setBreakpointByUrl = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'lineNumber': input.args[0],
        'url': input.args[1],
        'urlRegex': input.args[2],
        'columnNumber': input.args[3],
        'options': input.args[4]
    };

    this._inspector._request('Debugger.setBreakpointByUrl', paramObject, input.callback);
};

//
// Sets JavaScript breakpoint at a given location. 
//
Debugger.prototype.setBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'location': input.args[0],
        'options': input.args[1]
    };

    this._inspector._request('Debugger.setBreakpoint', paramObject, input.callback);
};

//
// Removes JavaScript breakpoint. 
//
Debugger.prototype.removeBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'breakpointId': input.args[0]
    };

    this._inspector._request('Debugger.removeBreakpoint', paramObject, input.callback);
};

//
// Continues execution until specific location is reached. 
//
Debugger.prototype.continueToLocation = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'location': input.args[0]
    };

    this._inspector._request('Debugger.continueToLocation', paramObject, input.callback);
};

//
// Steps over the statement. 
//
Debugger.prototype.stepOver = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Debugger.stepOver', paramObject, input.callback);
};

//
// Steps into the function call. 
//
Debugger.prototype.stepInto = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Debugger.stepInto', paramObject, input.callback);
};

//
// Steps out of the function call. 
//
Debugger.prototype.stepOut = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Debugger.stepOut', paramObject, input.callback);
};

//
// Stops on the next JavaScript statement. 
//
Debugger.prototype.pause = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Debugger.pause', paramObject, input.callback);
};

//
// Resumes JavaScript execution. 
//
Debugger.prototype.resume = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Debugger.resume', paramObject, input.callback);
};

//
// Searches for given string in script content. 
//
Debugger.prototype.searchInContent = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'scriptId': input.args[0],
        'query': input.args[1],
        'caseSensitive': input.args[2],
        'isRegex': input.args[3]
    };

    this._inspector._request('Debugger.searchInContent', paramObject, input.callback);
};

//
// Returns source for the script with given id. 
//
Debugger.prototype.getScriptSource = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'scriptId': input.args[0]
    };

    this._inspector._request('Debugger.getScriptSource', paramObject, input.callback);
};

//
// Returns detailed information on given function. 
//
Debugger.prototype.getFunctionDetails = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'functionId': input.args[0]
    };

    this._inspector._request('Debugger.getFunctionDetails', paramObject, input.callback);
};

//
// Defines pause on exceptions state. Can be set to stop on all exceptions, 
// uncaught exceptions or no exceptions. Initial pause on exceptions state is 
// `none`. 
//
Debugger.prototype.setPauseOnExceptions = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'state': input.args[0]
    };

    this._inspector._request('Debugger.setPauseOnExceptions', paramObject, input.callback);
};

//
// Evaluates expression on a given call frame. 
//
Debugger.prototype.evaluateOnCallFrame = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'callFrameId': input.args[0],
        'expression': input.args[1],
        'objectGroup': input.args[2],
        'includeCommandLineAPI': input.args[3],
        'doNotPauseOnExceptionsAndMuteConsole': input.args[4],
        'returnByValue': input.args[5],
        'generatePreview': input.args[6],
        'saveResult': input.args[7]
    };

    this._inspector._request('Debugger.evaluateOnCallFrame', paramObject, input.callback);
};

//
// Sets overlay message. 
//
Debugger.prototype.setOverlayMessage = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'message': input.args[0]
    };

    this._inspector._request('Debugger.setOverlayMessage', paramObject, input.callback);
};

