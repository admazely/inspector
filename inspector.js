
var fs = require('fs');
var path = require('path');
var util = require('util');
var http = require('http');
var flower = require('flower');
var events = require('events');
var WebSocket = require('ws');

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

    this._closed = false;
    this._callbacks = {};
    this._id = 0;

    // Add library domains
    var domains = Object.keys(library);
    for (var i = 0, l = domains.length; i < l; i++) {
        this[ domains[i] ] = library[ domains[i] ](this);
    }

    // Setup host and port parameters
    if (typeof port !== 'number') {
        throw new Error('A port number must be speficed');
    }
    if (typeof host !== 'string') {
        throw new Error('A host name must be speficed');
    }
    if (typeof href !== 'string') {
        console.log(href);
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
        flower.stream2buffer(res, function (err, buffer) {
            if (err) return self.emit('error', err);

            // Check that .close wasn't executed
            if (self._closed) return;

            // Find the websocket url pointing to the given url
            var wsUrl = null;
            var pages = JSON.parse(buffer.toString());
            for (var i = 0, l = pages.length; i < l; i++) {
                if (pages[i].url === href) {
                    wsUrl = pages[i].webSocketDebuggerUrl;
                    break;
                }
            }

            // Check that a page was found
            if (wsUrl === null) {
                return self.emit('error', new Error('No page with the given url was found'));
            }

            // Connect to the WebSocket
            self.ws = new WebSocket(wsUrl);
            self.ws.on('error', self.emit.bind(self, 'error'));
            self.ws.once('open', self.emit.bind(self, 'connect'));
        });
    });

    // Send request error to main object
    req.on('error', function (err) {

        // In case it was a ECONNREFUSED error
        // and there is time left,
        // and .close hasn't been called
        var timeUse = (time - Date.now()) + use;
        if (err.code === 'ECONNREFUSED' && (timeUse + 100) < timeout && self._closed === false) {

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
    var request = {
        'id': (++this._id),
        'method': method,
        'params': params
    };

    this._callbacks[this._id] = callback;
    this._ws.send(JSON.stringify(request));
};

WebKitInspector.prototype._respond = function (message) {
    message = JSON.parse(message);

    // respond from a request
    if (message.id) {
        var callback = this._callbacks[message.id];
        delete this._callbacks[message.id];

        if (message.error) {
            callback.call(null, message.error, null);
        } else {
            callback.call(null, null, message.params);
        }

        this._callbacks[message.id](message.params);
        return;
    }

    // respond from a notification
    var method = message.method.split('.');
    this[ method[0] ].emit(method[1], message.params);
};

WebKitInspector.prototype.close = function (callback) {
    if (this._closed) return;
    this._closed = true;

    // Execute callback one close event emits
    if (callback) this.once('close', callback);

    // Close WebSocket or just emit close
    if (this.ws) {
        this.ws.once('close', this.emit.bind(this, 'close'));
        this.ws.close();
    } else {
        this.emit('close');
    }
};
