//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function CSS(inspector) {
    this._inspector = inspector;

    var events = [
        'mediaQueryResultChanged',
        'styleSheetChanged',
        'namedFlowCreated',
        'namedFlowRemoved',
        'regionOversetChanged',
        'registeredNamedFlowContentElement',
        'unregisteredNamedFlowContentElement'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(CSS, EventEmitter);
module.exports = CSS;

//
// Enables the CSS agent for the given page. Clients should not assume that the 
// CSS agent has been enabled until the result of this command is received. 
//
CSS.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('CSS.enable', paramObject, input.callback);
};

//
// Disables the CSS agent for the given page. 
//
CSS.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('CSS.disable', paramObject, input.callback);
};

//
// Returns requested styles for a DOM node identified by `nodeId`. 
//
CSS.prototype.getMatchedStylesForNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'includePseudo': input.args[1],
        'includeInherited': input.args[2]
    };

    this._inspector._request('CSS.getMatchedStylesForNode', paramObject, input.callback);
};

//
// Returns the styles defined inline (explicitly in the "style" attribute and 
// implicitly, using DOM attributes) for a DOM node identified by `nodeId`. 
//
CSS.prototype.getInlineStylesForNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('CSS.getInlineStylesForNode', paramObject, input.callback);
};

//
// Returns the computed style for a DOM node identified by `nodeId`. 
//
CSS.prototype.getComputedStyleForNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('CSS.getComputedStyleForNode', paramObject, input.callback);
};

//
// Returns metainfo entries for all known stylesheets. 
//
CSS.prototype.getAllStyleSheets = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('CSS.getAllStyleSheets', paramObject, input.callback);
};

//
// Returns stylesheet data for the specified `styleSheetId`. 
//
CSS.prototype.getStyleSheet = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'styleSheetId': input.args[0]
    };

    this._inspector._request('CSS.getStyleSheet', paramObject, input.callback);
};

//
// Returns the current textual content and the URL for a stylesheet. 
//
CSS.prototype.getStyleSheetText = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'styleSheetId': input.args[0]
    };

    this._inspector._request('CSS.getStyleSheetText', paramObject, input.callback);
};

//
// Sets the new stylesheet text, thereby invalidating all existing 
// `CSSStyleId`'s and `CSSRuleId`'s contained by this stylesheet. 
//
CSS.prototype.setStyleSheetText = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'styleSheetId': input.args[0],
        'text': input.args[1]
    };

    this._inspector._request('CSS.setStyleSheetText', paramObject, input.callback);
};

//
// Sets the new `text` for the respective style. 
//
CSS.prototype.setStyleText = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'styleId': input.args[0],
        'text': input.args[1]
    };

    this._inspector._request('CSS.setStyleText', paramObject, input.callback);
};

//
// Modifies the rule selector. 
//
CSS.prototype.setRuleSelector = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'ruleId': input.args[0],
        'selector': input.args[1]
    };

    this._inspector._request('CSS.setRuleSelector', paramObject, input.callback);
};

//
// Creates a new empty rule with the given `selector` in a special "inspector" 
// stylesheet in the owner document of the context node. 
//
CSS.prototype.addRule = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'contextNodeId': input.args[0],
        'selector': input.args[1]
    };

    this._inspector._request('CSS.addRule', paramObject, input.callback);
};

//
// Returns all supported CSS property names. 
//
CSS.prototype.getSupportedCSSProperties = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('CSS.getSupportedCSSProperties', paramObject, input.callback);
};

//
// Ensures that the given node will have specified pseudo-classes whenever its 
// style is computed by the browser. 
//
CSS.prototype.forcePseudoState = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0],
        'forcedPseudoClasses': input.args[1]
    };

    this._inspector._request('CSS.forcePseudoState', paramObject, input.callback);
};

//
// Returns the Named Flows from the document. 
//
CSS.prototype.getNamedFlowCollection = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'documentNodeId': input.args[0]
    };

    this._inspector._request('CSS.getNamedFlowCollection', paramObject, input.callback);
};

