//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Memory(inspector) {
    this._inspector = inspector;
    this._eventNames = [
    ];
}
util.inherits(Memory, EventEmitter);
module.exports = Memory;

Memory.prototype.getDOMNodeCount = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Memory.getDOMNodeCount', paramObject, input.callback);
};

Memory.prototype.getProcessMemoryDistribution = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Memory.getProcessMemoryDistribution', paramObject, input.callback);
};

