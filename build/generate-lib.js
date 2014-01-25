
var fs = require('fs');
var path = require('path');

module.exports = function (api) {

    function openScript(name) {
        return fs.createWriteStream( path.resolve(__dirname, '..', 'lib', name + '.js') );
    }

    // A domain is a collection of Methods, Classes and Events.
    api.forEach(function (domain) {
        var doc = openScript(domain.domain);

        // Print domain title
        doc.write('//\n');
        doc.write('// Auto genereated script\n');
        doc.write('// Web Inspector API\n');
        doc.write('//\n');
        doc.write('\n');

        doc.write("var EventEmitter = require('events').EventEmitter;\n");
        doc.write("var util = require('util');\n");
        doc.write('\n');

        // Generate consturctor <start>
        doc.write('function ' + domain.domain + '(inspector) {\n');

        // Generate inspector binding
        doc.write('    this._inspector = inspector;\n');
        doc.write('\n');

        // Generate event index
        doc.write('    var events = [\n');
        var events = (domain.events || []);
        events.map(function (event, i) {
            doc.write("        '" + event.name + "'");

            if (i === events.length - 1) {
                doc.write('\n');
            } else {
                doc.write(',\n');
            }
        });
        doc.write('    ];\n');
        doc.write('\n');

        // Generate event listener validator
        doc.write("    this.on('newListener', function (name) {\n");
        doc.write('        if (events.indexOf(name) === -1) {\n');
        doc.write("            throw new Error(name + ' event don\\'t exist');\n");
        doc.write('        }\n');
        doc.write('    });\n');

        // Generate constructor <end>
        doc.write('}\n');
        doc.write('util.inherits('+ domain.domain + ', EventEmitter);\n');
        doc.write('module.exports = '+ domain.domain + ';\n');
        doc.write('\n');

        // Genereate commands index
        (domain.commands || []).forEach(function (command, i) {

            // Generate description
            if (command.description) {
                doc.write(formatDescription(command.description));
            }

            // Generate function statement <start>
            doc.write(domain.domain + '.prototype.' + command.name + ' = function () {\n');

            // Generate input command
            doc.write('    var input = this._inspector._splitArgs(arguments);\n');
            doc.write('\n');

            // Generate parameters object
            doc.write('    var paramObject = {\n');
            var params = (command.parameters || []);
            params.forEach(function (param, i) {
                doc.write("        '" + param.name + "': input.args[" + i + "]");
                if (i === params.length - 1) {
                    doc.write('\n');
                } else {
                    doc.write(',\n');
                }
            });
            doc.write('    };\n');
            doc.write('\n');

            // Genereate request command
            doc.write("    this._inspector._request('" + domain.domain + "." + command.name + "', paramObject, input.callback);\n");

            // Genereate function statement <end>
            doc.write('};\n');
            doc.write('\n');
        });

        doc.end('');
    });
};

function formatDescription(description) {
    var desc = description.replace(/<\/?code>/g, '`').split(' ');

    var output = '';
        output += '//\n';
        output += '// ';

    var state = 3;
    for (var i = 0, l = desc.length; i < l; i++) {
        if (state + desc[i].length > 80) {
            output += '\n';
            output += '// ';
            state = 3;
        }

        output += desc[i] + ' ';
        state += desc[i].length + 1;
    }

    output += '\n';
    output += '//\n';

    return output;
}
