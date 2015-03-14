
var test = require("tap").test;
var async = require('async');

var Browser = require('../browser.js');
var ping = require('../ping.js');
var inspector = require('../../inspector.js');

test("close timeout fallback", function (t) {

    // Open inspector
    var inspect;
    var chrome = new Browser(9222, 'about:blank', function () {

        inspect = inspector(9222, '127.0.0.1', 'about:blank');
        inspect.once('close', function () {
            console.log('close');
        });

        inspect.once('connect', function () {

            // check that chromium is online and working
            ping(inspect, function (err, pong) {
                t.ifError(err);
                t.equal(pong, true);

                // kill the WebSocket server (chromium)
                process.kill(chrome.browser.pid);
            });
        });

        inspect.once('close', function () {
            t.equal(inspect.closed, true);
            t.end();
        });
    });
});
