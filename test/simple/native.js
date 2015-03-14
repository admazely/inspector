
var test = require("tap").test;
var async = require('async');

var Browser = require('../browser.js');
var ping = require('../ping.js');
var inspector = require('../../inspector.js');

test("native WebKit inspector binding", function (t) {

    // Open inspector
    var chrome = new Browser(9222, 'about:blank', function () {

        t.test("instant startup", function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank');
            inspect.once('connect', function () {

                ping(inspect, function (err, pong) {
                    t.equal(err, null);
                    t.equal(pong, true);

                    // Close inspector
                    inspect.close(t.end.bind(t));
                });
            });
        });

        // This is executed after the "instant startup" test has completed
        t.test("delayed startup", function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank');
            inspect.once('connect', function () {

                ping(inspect, function (err, pong) {
                    t.equal(err, null);
                    t.equal(pong, true);

                    // Close inspector
                    inspect.close(t.end.bind(t));
                });
            });
        });

        t.test("close inspector", function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank');
            inspect.once('connect', function () {

                ping(inspect, function (err, pong) {
                    t.equal(err, null);
                    t.equal(pong, true);
                    t.equal(inspect.closed, false);

                    // Close inspector
                    inspect.close(function () {
                        t.equal(inspect.closed, true);

                        ping(inspect, function (err, pong) {
                            t.equal(err.message, 'not opened');
                            t.equal(pong, null);
                            t.end();
                        });
                    });
                });
            });
        });

        t.test('multiply connections', function (t) {
            var connections = [null, null];

            connections[0] = inspector(9222, '127.0.0.1', 'about:blank');
            connections[0].once('connect', function () {

                // Make another connection
                // - this should fail, because WebKit don't support multiply
                // - connections.
                connections[1] = inspector(9222, '127.0.0.1', 'about:blank');
                connections[1].once('error', function (err) {
                    t.equal(err.message, 'Another inspector is already listning');

                    // Close inspectors
                    connections[1].close(function () {
                        connections[0].close(t.end.bind(t));
                    });
                });
            });
        });

        t.test('multiply pings', function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank');
            inspect.once('connect', function () {

                // Make two simultaneous pings
                async.parallel([
                    ping.bind(null, inspect),
                    ping.bind(null, inspect)
                ], function (err, result) {
                    t.ok(err == null);
                    t.equal(result[0], true);
                    t.equal(result[1], true);

                    // Close inspector
                    inspect.close(t.end.bind(t));
                });
            });
        });

        t.test('true error objects callback', function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank', function () {
                inspect.Debugger.resume(function (err) {
                    t.equal(err.message, 'Can only perform operation while paused.');
                    t.equal(err.code, -32000);

                    inspect.close(t.end.bind(t));
                });
            });
        });

        t.test('constructor callback', function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank', function () {
                ping(inspect, function (err, pong) {
                    t.equal(err, null);
                    t.equal(pong, true);

                    inspect.close(t.end.bind(t));
                });
            });
        });

        t.test('close event', function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank', function () {
                inspect.once('close', function (nothing) {
                    // the ws exit code is not relayed
                    t.equal(nothing, undefined);

                    t.end();
                });
                inspect.close();
            });
        });

        t.test("console clear event", function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank');
            inspect.once('connect', function () {

                inspect.Console.enable(function (err) {
                    t.equal(err, null);

                    inspect.Console.clearMessages(function (err) {
                        t.equal(err, null);
                    });

                    inspect.Console.once('messagesCleared', function () {
                        // Close inspector
                        inspect.close(t.end.bind(t));
                    });
                });
            });
        });

        t.test("unsupported event throws", function (t) {
            var inspect;

            inspect = inspector(9222, '127.0.0.1', 'about:blank');
            inspect.once('connect', function () {

                try {
                    inspect.Console.once('clearlyNotSupported', function () {});
                } catch (e) {
                    t.equal(e.message, 'clearlyNotSupported event don\'t exist');

                    // Close inspector
                    inspect.close(t.end.bind(t));
                }
            });
        });

        t.test("close chrome", function (t) {
            chrome.close(t.end.bind(t));
        });

        t.end();
    });
});
