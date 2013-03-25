
var temp = require('temp');
var rimraf = require('rimraf');
var events = require('events');
var util = require('util');
var spawn = require('child_process').spawn;

var googleChrome = 'chromium-browser';
if (require('os').platform() === 'darwin') {
    googleChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
}

function Browser(port, href, callback) {
    if (!(this instanceof Browser)) return new Browser();

    var self = this;

    this.browser = null;
    this.userDir = null;
    this.closed = false;

    if (callback) this.once('open', callback);

    // create a tempory file
    temp.mkdir('inspector-test-profile', function(err, userDir) {
        if (err) return self.emit('error', err);

        self.userDir = userDir;

        var args = [
            href,
            '--user-data-dir=' + userDir,
            '--disable-translate',
            '--remote-debugging-port=' + port,
            '--disable-default-apps',
            '--no-first-run',
            '--no-default-browser-check',
            '--no-process-singleton-dialog',
            '--disable-prompt-on-repost',
            '--disable-plugins',
            '--safebrowsing-disable-auto-update'
        ];

        // Start browser
        self.browser = spawn(googleChrome, args);
        self.browser.once('exit', function () {
            self.browser = null;
            if (self.closed === false) {
                rimraf(userDir, function (err) {
                    if (err) return self.emit('error', err);
                });
            }
        });

        self.emit('open');
    });
}
module.exports = Browser;
util.inherits(Browser, events.EventEmitter);

Browser.prototype.close = function (callback) {
    var self = this;

    // Prevent close from being executed twice
    // and don't remove the userDir automaticly
    if (this.closed) return;
    this.closed = true;

    if (callback) self.once('close', callback);

    // Close browser
    if (this.browser) {
        this.browser.once('close', function () {
            rimraf(self.userDir, function (err) {
                if (err) return self.emit('error', err);

                self.emit('close');
            });
        });
        this.browser.kill();
    }
};
