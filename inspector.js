
var fs = require('fs');
var path = require('path');
var util = require('util');
var http = require('http');
var events = require('events');
var WebSocket = require('ws');
var endpoint = require('endpoint');

// Load library
var library = {};
fs.readdirSync(path.resolve(__dirname, 'lib'))
    .filter(function (filename) {
        return filename[0] !== '.';
    })
    .forEach(function (filename) {
        var filepath = path.resolve(__dirname, 'lib', filename);
        library[path.basename(filename, '.js')] = require(filepath);
    });

// Main constructor
function WebKitInspector(port, host, href, callback) {
    if (!(this instanceof WebKitInspector)) {
        return new WebKitInspector(port, host, href, callback);
    }

    this.closed = false;
    this._callbacks = {};
    this._id = 0;

    this.debug = false;

    // Add library domains
    var domains = Object.keys(library);
    for (var i = 0, l = domains.length; i < l; i++) {
        this[ domains[i] ] = new library[ domains[i] ](this);
    }

    // Setup host and port parameters
    if (typeof port !== 'number') {
        throw new Error('A port number must be speficed');
    }
    if (typeof host !== 'string') {
        throw new Error('A host name must be speficed');
    }
    if (typeof href !== 'string') {
        throw new Error('A page url must be speficed');
    }

    // Add callback to connect event
    if (callback) this.once('connect', callback);

    // Try to connect to WebKit Server
    this._tryConnect(port, host, href, 0, 2000);
}
util.inherits(WebKitInspector, events.EventEmitter);
module.exports = WebKitInspector;

WebKitInspector.prototype._tryConnect = function(port, host, href, use, timeout) {
    var self = this;

    var time = Date.now();
    var req = http.get('http://' + host + ':' + port + '/json', function (res) {
        res.pipe(endpoint(function (err, buffer) {
            if (err) return self.emit('error', err);

            // Check that .close wasn't executed
            if (self.closed) return;

            // Find the websocket url pointing to the given url
            var wsUrl = null;
            var pages = JSON.parse(buffer.toString());
            for (var i = 0, l = pages.length; i < l; i++) {
                if (pages[i].url === href) {
                    wsUrl = pages[i].webSocketDebuggerUrl || false;
                    break;
                }
            }

            // Check that a page was found
            if (wsUrl === null) {
                return self.emit('error', new Error('No page with the given url was found'));
            }

            // Check that a WebSocket connection is allowed
            if (wsUrl === false) {
                return self.emit('error', new Error('Another inspector is already listning'));
            }

            // Connect to the WebSocket
            self._ws = new WebSocket(wsUrl);
            self._ws.on('message', self._respond.bind(self));
            self._ws.on('error', self.emit.bind(self, 'error'));
            self._ws.once('open', self.emit.bind(self, 'connect'));
            self._ws.once('close', self.close.bind(self));
        }));
    });

    // Send request error to main object
    req.on('error', function (err) {

        // In case it was a ECONNREFUSED error
        // and there is time left,
        // and .close hasn't been called
        var timeUse = (time - Date.now()) + use;
        if (err.code === 'ECONNREFUSED' && (timeUse + 100) < timeout && self.closed === false) {

            // Try to connect again after 100 ms
            setTimeout(function() {
                self._tryConnect(port, host, href, timeUse, timeout);
            }, 100);

            return;
        }

        // Emit error
        self.emit('error', err);
    });
};

WebKitInspector.prototype._splitArgs = function (argsList) {
    var args = [], callback;

    // Split callback from argsList, asumes that callback is the last argument
    if (args.length === 1) {
        callback = argsList[0];
    } else {
        for (var i = 0, l = argsList.length; i < l; i++) {
            args.push(argsList[i]);
        }

        callback = args.pop();
    }

    // check that a callback was speficed
    if (typeof callback !== 'function') {
        throw new Error('missing callback');
    }

    return { args: args, callback: callback };
};

WebKitInspector.prototype._request = function (method, params, callback) {
    var self = this;
    var newId = ++this._id;

    var request = {
        'id': newId,
        'method': method,
        'params': params
    };

    this._callbacks[newId] = callback;

    if (this.debug) {
        console.log('=== Send request #' + newId + ' ===');
        console.log(util.inspect(request, false, Infinity, true));
        console.log('=== message end ===');
    }

    this._ws.send(JSON.stringify(request), function (err) {
        if (err) {
            delete self._callbacks[newId];
            callback(err, null);
        }
    });
};

WebKitInspector.prototype._respond = function (message) {
    message = JSON.parse(message);

    // respond from a request
    if (message.id) {
        if (this.debug) {
            console.log('=== Got response #' + message.id + ' ===');
            console.log(util.inspect(message, false, Infinity, true));
            console.log('=== message end ===');
        }

        var callback = this._callbacks[message.id];

        // Emit error if callback isn't defined
        if (callback === undefined) {
            this.emit('error', new Error('atempt to fire a missing callback'));
            return;
        }

        delete this._callbacks[message.id];

        if (message.error) {
            var err = new Error(message.error.message);
                err.code = message.error.code;
            callback.call(null, err, null);
        } else {
            callback.call(null, null, message.result);
        }
    }

    // respond from a notification
    else {
        if (this.debug) {
            console.log('=== Got event ::' + message.method + ' ===');
            console.log(util.inspect(message, false, Infinity, true));
            console.log('=== message end ===');
        }

        var method = message.method.split('.');
        this[ method[0] ].emit(method[1], message.params);
    }
};

WebKitInspector.prototype.close = function (callback) {
    var self = this;

    if (this.closed) return;
    this.closed = true;

    // Execute callback one close event emits
    if (typeof callback === 'function') this.once('close', callback);

    // Close WebSocket or just emit close
    if (this._ws && this._ws.readyState !== WebSocket.CLOSED) {
        this._ws.once('close', function () {
            // the ws module do sometimes return an exit code as a argument
            self.emit('close');
        });
        this._ws.close();
    } else {
        this.emit('close');
    }
};
