//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function DOM(inspector) {
    this._inspector = inspector;
    this._eventNames = [
        'DOM.documentUpdated',
        'DOM.setChildNodes',
        'DOM.attributeModified',
        'DOM.attributeRemoved',
        'DOM.inlineStyleInvalidated',
        'DOM.characterDataModified',
        'DOM.childNodeCountUpdated',
        'DOM.childNodeInserted',
        'DOM.childNodeRemoved',
        'DOM.shadowRootPushed',
        'DOM.shadowRootPopped'
    ];
}
util.inherits(DOM, EventEmitter);
module.exports = DOM;

//
// Returns the root DOM node to the caller. 
//
DOM.prototype.getDocument = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('DOM.getDocument', paramObject, input.callback);
};

//
// Requests that children of the node with given id are returned to the caller 
// in form of `setChildNodes` events. 
//
DOM.prototype.requestChildNodes = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('DOM.requestChildNodes', paramObject, input.callback);
};

//
// Executes `querySelector` on a given node. 
//
DOM.prototype.querySelector = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'selector': input.args[1]
    };

    this._inspector._request('DOM.querySelector', paramObject, input.callback);
};

//
// Executes `querySelectorAll` on a given node. 
//
DOM.prototype.querySelectorAll = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'selector': input.args[1]
    };

    this._inspector._request('DOM.querySelectorAll', paramObject, input.callback);
};

//
// Sets node name for a node with given id. 
//
DOM.prototype.setNodeName = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'name': input.args[1]
    };

    this._inspector._request('DOM.setNodeName', paramObject, input.callback);
};

//
// Sets node value for a node with given id. 
//
DOM.prototype.setNodeValue = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'value': input.args[1]
    };

    this._inspector._request('DOM.setNodeValue', paramObject, input.callback);
};

//
// Removes node with given id. 
//
DOM.prototype.removeNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('DOM.removeNode', paramObject, input.callback);
};

//
// Sets attribute for an element with given id. 
//
DOM.prototype.setAttributeValue = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'name': input.args[1],
        'value': input.args[2]
    };

    this._inspector._request('DOM.setAttributeValue', paramObject, input.callback);
};

//
// Sets attributes on element with given id. This method is useful when user 
// edits some existing attribute value and types in several attribute name/value 
// pairs. 
//
DOM.prototype.setAttributesAsText = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'text': input.args[1],
        'name': input.args[2]
    };

    this._inspector._request('DOM.setAttributesAsText', paramObject, input.callback);
};

//
// Removes attribute with given name from an element with given id. 
//
DOM.prototype.removeAttribute = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'name': input.args[1]
    };

    this._inspector._request('DOM.removeAttribute', paramObject, input.callback);
};

//
// Returns event listeners relevant to the node. 
//
DOM.prototype.getEventListenersForNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('DOM.getEventListenersForNode', paramObject, input.callback);
};

//
// Returns node's HTML markup. 
//
DOM.prototype.getOuterHTML = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('DOM.getOuterHTML', paramObject, input.callback);
};

//
// Sets node HTML markup, returns new node id. 
//
DOM.prototype.setOuterHTML = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'outerHTML': input.args[1]
    };

    this._inspector._request('DOM.setOuterHTML', paramObject, input.callback);
};

//
// Searches for a given string in the DOM tree. Use `getSearchResults` to access 
// search results or `cancelSearch` to end this search session. 
//
DOM.prototype.performSearch = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'query': input.args[0]
    };

    this._inspector._request('DOM.performSearch', paramObject, input.callback);
};

//
// Returns search results from given `fromIndex` to given `toIndex` from the 
// sarch with the given identifier. 
//
DOM.prototype.getSearchResults = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'searchId': input.args[0],
        'fromIndex': input.args[1],
        'toIndex': input.args[2]
    };

    this._inspector._request('DOM.getSearchResults', paramObject, input.callback);
};

//
// Discards search results from the session with the given id. 
// `getSearchResults` should no longer be called for that search. 
//
DOM.prototype.discardSearchResults = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'searchId': input.args[0]
    };

    this._inspector._request('DOM.discardSearchResults', paramObject, input.callback);
};

//
// Requests that the node is sent to the caller given the JavaScript node object 
// reference. All nodes that form the path from the node to the root are also 
// sent to the client as a series of `setChildNodes` notifications. 
//
DOM.prototype.requestNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'objectId': input.args[0]
    };

    this._inspector._request('DOM.requestNode', paramObject, input.callback);
};

//
// Enters the 'inspect' mode. In this mode, elements that user is hovering over 
// are highlighted. Backend then generates 'inspect' command upon element 
// selection. 
//
DOM.prototype.setInspectModeEnabled = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'enabled': input.args[0],
        'highlightConfig': input.args[1]
    };

    this._inspector._request('DOM.setInspectModeEnabled', paramObject, input.callback);
};

//
// Highlights given rectangle. Coordinates are absolute with respect to the main 
// frame viewport. 
//
DOM.prototype.highlightRect = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'x': input.args[0],
        'y': input.args[1],
        'width': input.args[2],
        'height': input.args[3],
        'color': input.args[4],
        'outlineColor': input.args[5]
    };

    this._inspector._request('DOM.highlightRect', paramObject, input.callback);
};

//
// Highlights DOM node with given id. 
//
DOM.prototype.highlightNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'highlightConfig': input.args[1]
    };

    this._inspector._request('DOM.highlightNode', paramObject, input.callback);
};

//
// Hides DOM node highlight. 
//
DOM.prototype.hideHighlight = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('DOM.hideHighlight', paramObject, input.callback);
};

//
// Highlights owner element of the frame with given id. 
//
DOM.prototype.highlightFrame = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0],
        'contentColor': input.args[1],
        'contentOutlineColor': input.args[2]
    };

    this._inspector._request('DOM.highlightFrame', paramObject, input.callback);
};

//
// Requests that the node is sent to the caller given its path. // FIXME, use 
// XPath 
//
DOM.prototype.pushNodeByPathToFrontend = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'path': input.args[0]
    };

    this._inspector._request('DOM.pushNodeByPathToFrontend', paramObject, input.callback);
};

//
// Resolves JavaScript node object for given node id. 
//
DOM.prototype.resolveNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'objectGroup': input.args[1]
    };

    this._inspector._request('DOM.resolveNode', paramObject, input.callback);
};

//
// Returns attributes for the specified node. 
//
DOM.prototype.getAttributes = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('DOM.getAttributes', paramObject, input.callback);
};

//
// Moves node into the new container, places it before the given anchor. 
//
DOM.prototype.moveTo = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'targetNodeId': input.args[1],
        'insertBeforeNodeId': input.args[2]
    };

    this._inspector._request('DOM.moveTo', paramObject, input.callback);
};

//
// Undoes the last performed action. 
//
DOM.prototype.undo = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('DOM.undo', paramObject, input.callback);
};

//
// Re-does the last undone action. 
//
DOM.prototype.redo = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('DOM.redo', paramObject, input.callback);
};

//
// Marks last undoable state. 
//
DOM.prototype.markUndoableState = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('DOM.markUndoableState', paramObject, input.callback);
};

