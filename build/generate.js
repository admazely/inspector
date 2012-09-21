
var fs = require('fs');
var path = require('path');

var api = JSON.parse( fs.readFileSync(path.resolve(__dirname, 'inspector.json'), 'utf8') );

var doc = require('./generate-doc.js');
    doc(api);
