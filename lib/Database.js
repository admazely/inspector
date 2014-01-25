//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Database(inspector) {
    this._inspector = inspector;

    var events = [
        'addDatabase'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Database, EventEmitter);
module.exports = Database;

//
// Enables database tracking, database events will now be delivered to the 
// client. 
//
Database.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Database.enable', paramObject, input.callback);
};

//
// Disables database tracking, prevents database events from being sent to the 
// client. 
//
Database.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Database.disable', paramObject, input.callback);
};

Database.prototype.getDatabaseTableNames = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'databaseId': input.args[0]
    };

    this._inspector._request('Database.getDatabaseTableNames', paramObject, input.callback);
};

Database.prototype.executeSQL = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'databaseId': input.args[0],
        'query': input.args[1]
    };

    this._inspector._request('Database.executeSQL', paramObject, input.callback);
};

