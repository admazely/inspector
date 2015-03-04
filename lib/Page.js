//
// Auto genereated script
// Web Inspector API
//

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Page(inspector) {
    this._inspector = inspector;

    var events = [
        'domContentEventFired',
        'loadEventFired',
        'frameNavigated',
        'frameDetached',
        'frameStartedLoading',
        'frameStoppedLoading',
        'frameScheduledNavigation',
        'frameClearedScheduledNavigation',
        'javascriptDialogOpening',
        'javascriptDialogClosed',
        'scriptsEnabled'
    ];

    this.on('newListener', function (name) {
        if (events.indexOf(name) === -1) {
            throw new Error(name + ' event don\'t exist');
        }
    });
}
util.inherits(Page, EventEmitter);
module.exports = Page;

//
// Enables page domain notifications. 
//
Page.prototype.enable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.enable', paramObject, input.callback);
};

//
// Disables page domain notifications. 
//
Page.prototype.disable = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.disable', paramObject, input.callback);
};

Page.prototype.addScriptToEvaluateOnLoad = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'scriptSource': input.args[0]
    };

    this._inspector._request('Page.addScriptToEvaluateOnLoad', paramObject, input.callback);
};

Page.prototype.removeScriptToEvaluateOnLoad = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'identifier': input.args[0]
    };

    this._inspector._request('Page.removeScriptToEvaluateOnLoad', paramObject, input.callback);
};

//
// Reloads given page optionally ignoring the cache. 
//
Page.prototype.reload = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'ignoreCache': input.args[0],
        'scriptToEvaluateOnLoad': input.args[1]
    };

    this._inspector._request('Page.reload', paramObject, input.callback);
};

//
// Navigates current page to the given URL. 
//
Page.prototype.navigate = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'url': input.args[0]
    };

    this._inspector._request('Page.navigate', paramObject, input.callback);
};

//
// Returns all browser cookies. Depending on the backend support, will return 
// detailed cookie information in the `cookies` field. 
//
Page.prototype.getCookies = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.getCookies', paramObject, input.callback);
};

//
// Deletes browser cookie with given name, domain and path. 
//
Page.prototype.deleteCookie = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'cookieName': input.args[0],
        'url': input.args[1]
    };

    this._inspector._request('Page.deleteCookie', paramObject, input.callback);
};

//
// Returns present frame / resource tree structure. 
//
Page.prototype.getResourceTree = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.getResourceTree', paramObject, input.callback);
};

//
// Returns content of the given resource. 
//
Page.prototype.getResourceContent = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0],
        'url': input.args[1]
    };

    this._inspector._request('Page.getResourceContent', paramObject, input.callback);
};

//
// Searches for given string in resource content. 
//
Page.prototype.searchInResource = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0],
        'url': input.args[1],
        'query': input.args[2],
        'caseSensitive': input.args[3],
        'isRegex': input.args[4]
    };

    this._inspector._request('Page.searchInResource', paramObject, input.callback);
};

//
// Searches for given string in frame / resource tree structure. 
//
Page.prototype.searchInResources = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'text': input.args[0],
        'caseSensitive': input.args[1],
        'isRegex': input.args[2]
    };

    this._inspector._request('Page.searchInResources', paramObject, input.callback);
};

//
// Sets given markup as the document's HTML. 
//
Page.prototype.setDocumentContent = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'frameId': input.args[0],
        'html': input.args[1]
    };

    this._inspector._request('Page.setDocumentContent', paramObject, input.callback);
};

//
// Requests that backend shows paint rectangles 
//
Page.prototype.setShowPaintRects = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'result': input.args[0]
    };

    this._inspector._request('Page.setShowPaintRects', paramObject, input.callback);
};

//
// Determines if scripts can be executed in the page. 
//
Page.prototype.getScriptExecutionStatus = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.getScriptExecutionStatus', paramObject, input.callback);
};

//
// Switches script execution in the page. 
//
Page.prototype.setScriptExecutionDisabled = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'value': input.args[0]
    };

    this._inspector._request('Page.setScriptExecutionDisabled', paramObject, input.callback);
};

//
// Toggles mouse event-based touch event emulation. 
//
Page.prototype.setTouchEmulationEnabled = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'enabled': input.args[0]
    };

    this._inspector._request('Page.setTouchEmulationEnabled', paramObject, input.callback);
};

//
// Emulates the given media for CSS media queries. 
//
Page.prototype.setEmulatedMedia = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'media': input.args[0]
    };

    this._inspector._request('Page.setEmulatedMedia', paramObject, input.callback);
};

//
// Indicates the visibility of compositing borders. 
//
Page.prototype.getCompositingBordersVisible = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.getCompositingBordersVisible', paramObject, input.callback);
};

//
// Controls the visibility of compositing borders. 
//
Page.prototype.setCompositingBordersVisible = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'visible': input.args[0]
    };

    this._inspector._request('Page.setCompositingBordersVisible', paramObject, input.callback);
};

//
// Capture a snapshot of the specified node that does not include unrelated 
// layers. 
//
Page.prototype.snapshotNode = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'nodeId': input.args[0]
    };

    this._inspector._request('Page.snapshotNode', paramObject, input.callback);
};

//
// Capture a snapshot of the page within the specified rectangle and coordinate 
// system. 
//
Page.prototype.snapshotRect = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'x': input.args[0],
        'y': input.args[1],
        'width': input.args[2],
        'height': input.args[3],
        'coordinateSystem': input.args[4]
    };

    this._inspector._request('Page.snapshotRect', paramObject, input.callback);
};

//
// Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, 
// or onbeforeunload). 
//
Page.prototype.handleJavaScriptDialog = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'accept': input.args[0],
        'promptText': input.args[1]
    };

    this._inspector._request('Page.handleJavaScriptDialog', paramObject, input.callback);
};

//
// Grab an archive of the page. 
//
Page.prototype.archive = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.archive', paramObject, input.callback);
};

