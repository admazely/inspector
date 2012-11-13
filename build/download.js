
var https = require('https');
var path = require('path');
var fs = require('fs');

https.get('https://raw.github.com/WebKit/webkit/master/Source/WebCore/inspector/Inspector.json', function (res) {
    res.pipe( fs.createWriteStream(path.resolve(__dirname, 'inspector.json')) );
});
