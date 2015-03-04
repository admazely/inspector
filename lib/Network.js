//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Network(inspector) {
    this._inspector = inspector;

    var events = [
        'requestWillBeSent',
        'requestServedFromCache',
        'responseReceived',
        'dataReceived',
        'loadingFinished',
        'loadingFailed',
        'requestServedFromMemoryCache',
        'webSocketWillSendHandshakeRequest',
        'webSocketHandshakeResponseReceived',
        'webSocketCreated',
        'webSocketClosed',
        'webSocketFrameReceived',
        'webSocketFrameError',
        'webSocketFrameSent'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Network, EventEmitter);
module.exports = Network;

//
// Enables network tracking, network events will now be delivered to the client. 
//
Network.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Network.enable', paramObject, input.callback);
};

//
// Disables network tracking, prevents network events from being sent to the 
// client. 
//
Network.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Network.disable', paramObject, input.callback);
};

//
// Specifies whether to always send extra HTTP headers with the requests from 
// this page. 
//
Network.prototype.setExtraHTTPHeaders = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'headers': input.args[0]
    };

    this._inspector._request('Network.setExtraHTTPHeaders', paramObject, input.callback);
};

//
// Returns content served for the given request. 
//
Network.prototype.getResponseBody = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'requestId': input.args[0]
    };

    this._inspector._request('Network.getResponseBody', paramObject, input.callback);
};

//
// Tells whether clearing browser cache is supported. 
//
Network.prototype.canClearBrowserCache = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Network.canClearBrowserCache', paramObject, input.callback);
};

//
// Clears browser cache. 
//
Network.prototype.clearBrowserCache = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Network.clearBrowserCache', paramObject, input.callback);
};

//
// Tells whether clearing browser cookies is supported. 
//
Network.prototype.canClearBrowserCookies = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Network.canClearBrowserCookies', paramObject, input.callback);
};

//
// Clears browser cookies. 
//
Network.prototype.clearBrowserCookies = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Network.clearBrowserCookies', paramObject, input.callback);
};

//
// Toggles ignoring cache for each request. If `true`, cache will not be used. 
//
Network.prototype.setCacheDisabled = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'cacheDisabled': input.args[0]
    };

    this._inspector._request('Network.setCacheDisabled', paramObject, input.callback);
};

//
// Loads a resource in the context of a frame on the inspected page without 
// cross origin checks. 
//
Network.prototype.loadResource = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0],
        'url': input.args[1]
    };

    this._inspector._request('Network.loadResource', paramObject, input.callback);
};

