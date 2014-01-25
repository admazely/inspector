//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function DOMDebugger(inspector) {
    this._inspector = inspector;

    var events = [
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(DOMDebugger, EventEmitter);
module.exports = DOMDebugger;

//
// Sets breakpoint on particular operation with DOM. 
//
DOMDebugger.prototype.setDOMBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'type': input.args[1]
    };

    this._inspector._request('DOMDebugger.setDOMBreakpoint', paramObject, input.callback);
};

//
// Removes DOM breakpoint that was set using `setDOMBreakpoint`. 
//
DOMDebugger.prototype.removeDOMBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'type': input.args[1]
    };

    this._inspector._request('DOMDebugger.removeDOMBreakpoint', paramObject, input.callback);
};

//
// Sets breakpoint on particular DOM event. 
//
DOMDebugger.prototype.setEventListenerBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'eventName': input.args[0]
    };

    this._inspector._request('DOMDebugger.setEventListenerBreakpoint', paramObject, input.callback);
};

//
// Removes breakpoint on particular DOM event. 
//
DOMDebugger.prototype.removeEventListenerBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'eventName': input.args[0]
    };

    this._inspector._request('DOMDebugger.removeEventListenerBreakpoint', paramObject, input.callback);
};

//
// Sets breakpoint on particular native event. 
//
DOMDebugger.prototype.setInstrumentationBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'eventName': input.args[0]
    };

    this._inspector._request('DOMDebugger.setInstrumentationBreakpoint', paramObject, input.callback);
};

//
// Sets breakpoint on particular native event. 
//
DOMDebugger.prototype.removeInstrumentationBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'eventName': input.args[0]
    };

    this._inspector._request('DOMDebugger.removeInstrumentationBreakpoint', paramObject, input.callback);
};

//
// Sets breakpoint on XMLHttpRequest. 
//
DOMDebugger.prototype.setXHRBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'url': input.args[0]
    };

    this._inspector._request('DOMDebugger.setXHRBreakpoint', paramObject, input.callback);
};

//
// Removes breakpoint from XMLHttpRequest. 
//
DOMDebugger.prototype.removeXHRBreakpoint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'url': input.args[0]
    };

    this._inspector._request('DOMDebugger.removeXHRBreakpoint', paramObject, input.callback);
};

