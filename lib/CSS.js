//
// Auto genereated script
// Web Inspector API 1.0
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function CSS(inspector) {
    this._inspector = inspector;
    this._eventNames = [
        'CSS.mediaQueryResultChanged',
        'CSS.styleSheetChanged',
        'CSS.namedFlowCreated',
        'CSS.namedFlowRemoved',
        'CSS.regionLayoutUpdated'
    ];
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
// Sets the new `text` for a property in the respective style, at offset 
// `propertyIndex`. If `overwrite` is `true`, a property at the given offset is 
// overwritten, otherwise inserted. `text` entirely replaces the property `name: 
// value`. 
//
CSS.prototype.setPropertyText = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'styleId': input.args[0],
        'propertyIndex': input.args[1],
        'text': input.args[2],
        'overwrite': input.args[3]
    };

    this._inspector._request('CSS.setPropertyText', paramObject, input.callback);
};

//
// Toggles the property in the respective style, at offset `propertyIndex`. The 
// `disable` parameter denotes whether the property should be disabled (i.e. 
// removed from the style declaration). If `disable == false`, the property gets 
// put back into its original place in the style declaration. 
//
CSS.prototype.toggleProperty = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'styleId': input.args[0],
        'propertyIndex': input.args[1],
        'disable': input.args[2]
    };

    this._inspector._request('CSS.toggleProperty', paramObject, input.callback);
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

CSS.prototype.startSelectorProfiler = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('CSS.startSelectorProfiler', paramObject, input.callback);
};

CSS.prototype.stopSelectorProfiler = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('CSS.stopSelectorProfiler', paramObject, input.callback);
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

