
var http = require('http');
var path = require('path');
var fs = require('fs');

http.get('http://trac.webkit.org/export/129139/trunk/Source/WebCore/inspector/Inspector.json', function (res) {
    res.pipe( fs.createWriteStream(path.resolve(__dirname, 'inspector.json')) );
});
