
var endpoint = require('endpoint');
var https = require('https');
var async = require('async');
var path = require('path');
var fs = require('fs');

var domainNames = [
    'ApplicationCache', 'CSS', 'Canvas', 'Console',
    'DOM', 'DOMDebugger', 'DOMStorage', 'Database',
    'HeapProfiler', 'IndexedDB', 'Input', 'LayerTree',
    'Memory', 'Network', 'Page', 'Profiler', 'Timeline',
    'Worker'
];

async.map(domainNames, fetch, function (err, domains) {
    if (err) throw err;

    fs.writeFile(
        path.resolve(__dirname, 'inspector.json'),
        JSON.stringify(domains, null, '\t'),
        function (err) {
            if (err) throw err;
            console.log('fetched and build inspector.json');
        }
    );
});

function fetch(name, done) {
    var href = 'https://raw.githubusercontent.com/WebKit/webkit/master/Source/JavaScriptCore/inspector/protocol/'+name+'.json';
    https.get(href, function (res) {
        res.pipe(endpoint(function (err, body) {
            if (err) return done(err, null);
            else return done(null, JSON.parse(body.toString()));
        }));
    });
}
