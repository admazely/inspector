//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function LayerTree(inspector) {
    this._inspector = inspector;

    var events = [
        'layerTreeDidChange'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(LayerTree, EventEmitter);
module.exports = LayerTree;

//
// Enables compositing tree inspection. 
//
LayerTree.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('LayerTree.enable', paramObject, input.callback);
};

//
// Disables compositing tree inspection. 
//
LayerTree.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('LayerTree.disable', paramObject, input.callback);
};

//
// Returns the layer tree structure of the current page. 
//
LayerTree.prototype.getLayerTree = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('LayerTree.getLayerTree', paramObject, input.callback);
};

//
// Returns the node id for a given layer id. 
//
LayerTree.prototype.nodeIdForLayerId = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'layerId': input.args[0]
    };

    this._inspector._request('LayerTree.nodeIdForLayerId', paramObject, input.callback);
};

