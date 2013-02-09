//
// Auto genereated script
// Web Inspector API 1.0
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
        'javascriptDialogClosed'
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
        'scriptToEvaluateOnLoad': input.args[1],
        'scriptPreprocessor': input.args[2]
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
// Returns all browser cookies. Depending on the backend support, will either 
// return detailed cookie information in the `cookie` field or string cookie 
// representation using `cookieString`. 
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
// Checks whether `setDeviceMetricsOverride` can be invoked. 
//
Page.prototype.canOverrideDeviceMetrics = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.canOverrideDeviceMetrics', paramObject, input.callback);
};

//
// Overrides the values of device screen dimensions (window.screen.width, 
// window.screen.height, window.innerWidth, window.innerHeight, and 
// "device-width"/"device-height"-related CSS media query results) and the font 
// scale factor. 
//
Page.prototype.setDeviceMetricsOverride = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'width': input.args[0],
        'height': input.args[1],
        'fontScaleFactor': input.args[2],
        'fitWindow': input.args[3]
    };

    this._inspector._request('Page.setDeviceMetricsOverride', paramObject, input.callback);
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
// Tells if backend supports debug borders on layers 
//
Page.prototype.canShowDebugBorders = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.canShowDebugBorders', paramObject, input.callback);
};

//
// Requests that backend shows debug borders on layers 
//
Page.prototype.setShowDebugBorders = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'show': input.args[0]
    };

    this._inspector._request('Page.setShowDebugBorders', paramObject, input.callback);
};

//
// Tells if backend supports a FPS counter display 
//
Page.prototype.canShowFPSCounter = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.canShowFPSCounter', paramObject, input.callback);
};

//
// Requests that backend shows the FPS counter 
//
Page.prototype.setShowFPSCounter = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'show': input.args[0]
    };

    this._inspector._request('Page.setShowFPSCounter', paramObject, input.callback);
};

//
// Tells if backend supports continuous painting 
//
Page.prototype.canContinuouslyPaint = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.canContinuouslyPaint', paramObject, input.callback);
};

//
// Requests that backend enables continuous painting 
//
Page.prototype.setContinuousPaintingEnabled = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'enabled': input.args[0]
    };

    this._inspector._request('Page.setContinuousPaintingEnabled', paramObject, input.callback);
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
// Overrides the Geolocation Position or Error. 
//
Page.prototype.setGeolocationOverride = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'latitude': input.args[0],
        'longitude': input.args[1],
        'accuracy': input.args[2]
    };

    this._inspector._request('Page.setGeolocationOverride', paramObject, input.callback);
};

//
// Clears the overriden Geolocation Position and Error. 
//
Page.prototype.clearGeolocationOverride = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.clearGeolocationOverride', paramObject, input.callback);
};

//
// Checks if Geolocation can be overridden. 
//
Page.prototype.canOverrideGeolocation = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.canOverrideGeolocation', paramObject, input.callback);
};

//
// Overrides the Device Orientation. 
//
Page.prototype.setDeviceOrientationOverride = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'alpha': input.args[0],
        'beta': input.args[1],
        'gamma': input.args[2]
    };

    this._inspector._request('Page.setDeviceOrientationOverride', paramObject, input.callback);
};

//
// Clears the overridden Device Orientation. 
//
Page.prototype.clearDeviceOrientationOverride = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.clearDeviceOrientationOverride', paramObject, input.callback);
};

//
// Check the backend if Web Inspector can override the device orientation. 
//
Page.prototype.canOverrideDeviceOrientation = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.canOverrideDeviceOrientation', paramObject, input.callback);
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
// Capture page screenshot. 
//
Page.prototype.captureScreenshot = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
    };

    this._inspector._request('Page.captureScreenshot', paramObject, input.callback);
};

//
// Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, 
// or onbeforeunload). 
//
Page.prototype.handleJavaScriptDialog = function () {
    var input = this._inspector._splitArgs(arguments);

    var paramObject = {
        'accept': input.args[0]
    };

    this._inspector._request('Page.handleJavaScriptDialog', paramObject, input.callback);
};

