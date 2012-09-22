//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Worker(inspector) {
    this._inspector = inspector;
    this._eventNames = [
        'Worker.workerCreated',
        'Worker.workerTerminated',
        'Worker.dispatchMessageFromWorker',
        'Worker.disconnectedFromWorker'
    ];
}
util.inherits(Worker, EventEmitter);
module.exports = Worker;

Worker.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Worker.enable', paramObject, input.callback);
};

Worker.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Worker.disable', paramObject, input.callback);
};

Worker.prototype.sendMessageToWorker = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'workerId': input.args[0],
        'message': input.args[1]
    };

    this._inspector._request('Worker.sendMessageToWorker', paramObject, input.callback);
};

Worker.prototype.connectToWorker = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'workerId': input.args[0]
    };

    this._inspector._request('Worker.connectToWorker', paramObject, input.callback);
};

Worker.prototype.disconnectFromWorker = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'workerId': input.args[0]
    };

    this._inspector._request('Worker.disconnectFromWorker', paramObject, input.callback);
};

Worker.prototype.setAutoconnectToWorkers = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'value': input.args[0]
    };

    this._inspector._request('Worker.setAutoconnectToWorkers', paramObject, input.callback);
};

