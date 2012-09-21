
var fs = require('fs');
var path = require('path');

module.exports = function (api) {

    function openDocument(name) {
        return fs.createWriteStream( path.resolve(__dirname, '..', 'doc', name + '.md') );
    }

    // A domain is a collection of Methods, Classes and Events.
    api.domains.forEach(function (domain) {
        var doc = openDocument(domain.domain);

        // Print domain title
        doc.write('# ' + domain.domain + '\n');
        doc.write('\n');
        doc.write('_Auto generated documentation for WebKit inspector `' + api.version.major + '.' + api.version.minor + '`_');
        doc.write('\n');

        // Print domain description
        if (domain.description) {
            doc.write('\n');
            doc.write(domain.description + '\n');
            doc.write('\n');
        }

        // Generate domain index
        var index = {};

        // Genereate commands index
        (domain.commands || []).forEach(function (command, i) {
            if (i === 0) index.Commands = [];

            var output = {
                short: '',
                title: '',
                content: ''
            };

            var params = (command.parameters || []).concat({name: 'callback', type: 'function'});
            var returns = [{name: 'error', type: 'error'}].concat(command.returns || []);

            // Generate shortname
            output.short = command.name;

            // Generate title
            output.title += domain.domain + '.' + command.name + '(';
            params.forEach(function (param, i) {
                if (i !== 0) output.title += ', ';

                if (param.optional) output.title += '[';
                var ref = extractRef(param);
                if (ref) {
                    output.title += createMarkDownLink(ref.name, ref.id);
                } else {
                    output.title += param.name;
                }
                if (param.optional) output.title += ']';

            });
            output.title += ')';

            // Generate content
            if (command.description) {
                output.content += convertMarkdownText(command.description) + '\n';
                output.content += '\n';
            }

            output.content += createMarkdownAPI('Parameters', params);
            output.content += createMarkdownAPI('Results', returns);

            // Bind content
            index.Commands.push(output);
        });

        // Generate events index
        (domain.events || []).forEach(function (event, i) {
            if (i === 0) index.Events = [];

            var returns = (event.parameters || []);

            // Generate title and content
            index.Events.push({
                short: event.name,
                title: 'Event: ' + event.name,
                content: createMarkdownAPI('Results', returns)
            });
        });

        // Generate types index
        (domain.types || []).forEach(function (type, i) {
            if (i === 0) index.Types = [];

            var params = (type.properties || []);

            // Generate title
            var output = {
                short: type.id,
                title: 'Class: ' + type.id,
                content: ''
            };

            // Generate content
            if (type.type) output.content += '_Type: ' + type.type + '_\n\n';
            output.content += createMarkdownAPI('Properties', params);

            // Bind content
            index.Types.push(output);
        });

        // Print Index
        doc.write('\n');
        Object.keys(index).forEach(function (domain) {
            index[domain].forEach(function (section, i) {
                if (i === 0) doc.write('* ' + domain + '\n');
                doc.write(' * ' + createMarkDownLink(section.short, '#' + convertMarkdownHash(section.title)) + '\n');
            });
        });
        doc.write('\n');

        // Print Content
        doc.write('\n');
        Object.keys(index).forEach(function (domain) {
            index[domain].forEach(function (section, i) {
                if (i === 0) doc.write('## ' + domain + '\n\n');

                doc.write('### ' + section.title + '\n\n');
                doc.write(section.content + '\n');
            });
        });
        doc.write('\n');

        doc.end('\n');
    });

    function extractRef(param) {
        var ref = param.$ref || false;
        if (param.items && param.items.$ref) {
            ref = param.items.$ref;
        }

        if (ref === false) return false;

        var parts = ref.split('.');
        var name = parts.pop();
        var file = parts.pop() || false;
        if (file) file += '.md';

        return {
            name: ref,
            id: (file ? file : '') + '#' + convertMarkdownHash('Class: ' + name)
        };
    }

    function convertMarkdownHash(link) {
        return link
                .replace(/(\[[^\]]+\])(\([^\)]+\))/g, '$1')
                .toLowerCase()
                .replace(/[^a-z ]/g, '')
                .replace(/ /g, '-');
    }

    function convertMarkdownText(text) {
        return text.replace(/<\/?code>/g, '`');
    }

    function createMarkDownLink(text, link) {
        return '[' + text + '](' + link + ')';
    }

    function createMarkdownAPI(headline, params) {
        var md = '';

        if (params.length !== 0) {

            md += '### ' + headline + '\n';
            md += '\n';

            params.forEach(function (param) {
                var ref = extractRef(param);

                md += '_**';
                md += param.name + ' ( ';

                if (param.optional) {
                    md += 'optional ';
                }

                if (param.type) {
                    md += param.type + ' ';
                }

                if (ref) {
                    if (param.type) md += 'of ';
                    md += createMarkDownLink(ref.name, ref.id);
                }

                md += ')';
                md += '**_<br>\n';

                if (param.description) {
                    md += '> ' + param.description + '\n\n';
                }
            });

            md += '\n';
        }

        return md;
    }
};
