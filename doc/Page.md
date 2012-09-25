# Page

_Auto generated documentation for WebKit inspector `1.0`_

Actions and events related to the inspected page belong to the page domain.


* Commands
 * [enable](#pageenablecallback)
 * [disable](#pagedisablecallback)
 * [addScriptToEvaluateOnLoad](#pageaddscripttoevaluateonloadscriptsource-callback)
 * [removeScriptToEvaluateOnLoad](#pageremovescripttoevaluateonloadscriptidentifier-callback)
 * [reload](#pagereloadignorecache-scripttoevaluateonload-callback)
 * [navigate](#pagenavigateurl-callback)
 * [getCookies](#pagegetcookiescallback)
 * [deleteCookie](#pagedeletecookiecookiename-domain-callback)
 * [getResourceTree](#pagegetresourcetreecallback)
 * [getResourceContent](#pagegetresourcecontentnetworkframeid-url-callback)
 * [searchInResource](#pagesearchinresourcenetworkframeid-url-query-casesensitive-isregex-callback)
 * [searchInResources](#pagesearchinresourcestext-casesensitive-isregex-callback)
 * [setDocumentContent](#pagesetdocumentcontentnetworkframeid-html-callback)
 * [canOverrideDeviceMetrics](#pagecanoverridedevicemetricscallback)
 * [setDeviceMetricsOverride](#pagesetdevicemetricsoverridewidth-height-fontscalefactor-fitwindow-callback)
 * [setShowPaintRects](#pagesetshowpaintrectsresult-callback)
 * [getScriptExecutionStatus](#pagegetscriptexecutionstatuscallback)
 * [setScriptExecutionDisabled](#pagesetscriptexecutiondisabledvalue-callback)
 * [setGeolocationOverride](#pagesetgeolocationoverridelatitude-longitude-accuracy-callback)
 * [clearGeolocationOverride](#pagecleargeolocationoverridecallback)
 * [canOverrideGeolocation](#pagecanoverridegeolocationcallback)
 * [setDeviceOrientationOverride](#pagesetdeviceorientationoverridealpha-beta-gamma-callback)
 * [clearDeviceOrientationOverride](#pagecleardeviceorientationoverridecallback)
 * [canOverrideDeviceOrientation](#pagecanoverridedeviceorientationcallback)
 * [setTouchEmulationEnabled](#pagesettouchemulationenabledenabled-callback)
* Events
 * [domContentEventFired](#event-domcontenteventfired)
 * [loadEventFired](#event-loadeventfired)
 * [frameNavigated](#event-framenavigated)
 * [frameDetached](#event-framedetached)
* Types
 * [ResourceType](#class-resourcetype)
 * [Frame](#class-frame)
 * [FrameResourceTree](#class-frameresourcetree)
 * [SearchMatch](#class-searchmatch)
 * [SearchResult](#class-searchresult)
 * [Cookie](#class-cookie)
 * [ScriptIdentifier](#class-scriptidentifier)


## Commands

### Page.enable(callback)

Enables page domain notifications.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.disable(callback)

Disables page domain notifications.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.addScriptToEvaluateOnLoad(scriptSource, callback)

### Parameters

_**scriptSource ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**identifier ( [ScriptIdentifier](#class-scriptidentifier) )**_<br>
> Identifier of the added script.



### Page.removeScriptToEvaluateOnLoad([ScriptIdentifier](#class-scriptidentifier), callback)

### Parameters

_**identifier ( [ScriptIdentifier](#class-scriptidentifier) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.reload([ignoreCache], [scriptToEvaluateOnLoad], callback)

Reloads given page optionally ignoring the cache.

### Parameters

_**ignoreCache ( optional boolean )**_<br>
> If true, browser cache is ignored (as if the user pressed Shift+refresh).

_**scriptToEvaluateOnLoad ( optional string )**_<br>
> If set, the script will be injected into all frames of the inspected page after reload.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.navigate(url, callback)

Navigates current page to the given URL.

### Parameters

_**url ( string )**_<br>
> URL to navigate the page to.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.getCookies(callback)

Returns all browser cookies. Depending on the backend support, will either return detailed cookie information in the `cookie` field or string cookie representation using `cookieString`.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**cookies ( array of [Cookie](#class-cookie) )**_<br>
> Array of cookie objects.

_**cookiesString ( string )**_<br>
> document.cookie string representation of the cookies.



### Page.deleteCookie(cookieName, domain, callback)

Deletes browser cookie with given name for the given domain.

### Parameters

_**cookieName ( string )**_<br>
> Name of the cookie to remove.

_**domain ( string )**_<br>
> Domain of the cookie to remove.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.getResourceTree(callback)

Returns present frame / resource tree structure.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**frameTree ( [FrameResourceTree](#class-frameresourcetree) )**_<br>
> Present frame / resource tree structure.



### Page.getResourceContent([Network.FrameId](Network.md#class-frameid), url, callback)

Returns content of the given resource.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Frame id to get resource for.

_**url ( string )**_<br>
> URL of the resource to get content for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**content ( string )**_<br>
> Resource content.

_**base64Encoded ( boolean )**_<br>
> True, if content was served as base64.



### Page.searchInResource([Network.FrameId](Network.md#class-frameid), url, query, [caseSensitive], [isRegex], callback)

Searches for given string in resource content.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Frame id for resource to search in.

_**url ( string )**_<br>
> URL of the resource to search in.

_**query ( string )**_<br>
> String to search for.

_**caseSensitive ( optional boolean )**_<br>
> If true, search is case sensitive.

_**isRegex ( optional boolean )**_<br>
> If true, treats string parameter as regex.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( array of [SearchMatch](#class-searchmatch) )**_<br>
> List of search matches.



### Page.searchInResources(text, [caseSensitive], [isRegex], callback)

Searches for given string in frame / resource tree structure.

### Parameters

_**text ( string )**_<br>
> String to search for.

_**caseSensitive ( optional boolean )**_<br>
> If true, search is case sensitive.

_**isRegex ( optional boolean )**_<br>
> If true, treats string parameter as regex.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( array of [SearchResult](#class-searchresult) )**_<br>
> List of search results.



### Page.setDocumentContent([Network.FrameId](Network.md#class-frameid), html, callback)

Sets given markup as the document's HTML.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Frame id to set HTML for.

_**html ( string )**_<br>
> HTML content to set.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.canOverrideDeviceMetrics(callback)

Checks whether `setDeviceMetricsOverride` can be invoked.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> If true, <code>setDeviceMetricsOverride</code> can safely be invoked on the agent.



### Page.setDeviceMetricsOverride(width, height, fontScaleFactor, fitWindow, callback)

Overrides the values of device screen dimensions (window.screen.width, window.screen.height, window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media query results) and the font scale factor.

### Parameters

_**width ( integer )**_<br>
> Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.

_**height ( integer )**_<br>
> Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.

_**fontScaleFactor ( number )**_<br>
> Overriding font scale factor value (must be positive). 1 disables the override.

_**fitWindow ( boolean )**_<br>
> Whether a view that exceeds the available browser window area should be scaled down to fit.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.setShowPaintRects(result, callback)

Requests that backend shows paint rectangles

### Parameters

_**result ( boolean )**_<br>
> True for showing paint rectangles

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.getScriptExecutionStatus(callback)

Determines if scripts can be executed in the page.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( string enumerated ["allowed","disabled","forbidden"] )**_<br>
> Script execution status: "allowed" if scripts can be executed, "disabled" if script execution has been disabled through page settings, "forbidden" if script execution for the given page is not possible for other reasons.



### Page.setScriptExecutionDisabled(value, callback)

Switches script execution in the page.

### Parameters

_**value ( boolean )**_<br>
> Whether script execution should be disabled in the page.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.setGeolocationOverride([latitude], [longitude], [accuracy], callback)

Overrides the Geolocation Position or Error.

### Parameters

_**latitude ( optional number )**_<br>
> Mock longitude

_**longitude ( optional number )**_<br>
> Mock latitude

_**accuracy ( optional number )**_<br>
> Mock accuracy

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.clearGeolocationOverride(callback)

Clears the overriden Geolocation Position and Error.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.canOverrideGeolocation(callback)

Checks if Geolocation can be overridden.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if browser can ovrride Geolocation.



### Page.setDeviceOrientationOverride(alpha, beta, gamma, callback)

Overrides the Device Orientation.

### Parameters

_**alpha ( number )**_<br>
> Mock alpha

_**beta ( number )**_<br>
> Mock beta

_**gamma ( number )**_<br>
> Mock gamma

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.clearDeviceOrientationOverride(callback)

Clears the overridden Device Orientation.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.canOverrideDeviceOrientation(callback)

Check the backend if Web Inspector can override the device orientation.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> If true, <code>setDeviceOrientationOverride</code> can safely be invoked on the agent.



### Page.setTouchEmulationEnabled(enabled, callback)

Toggles mouse event-based touch event emulation.

### Parameters

_**enabled ( boolean )**_<br>
> Whether the touch event emulation should be enabled.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: domContentEventFired

### Results

_**timestamp ( number )**_<br>


### Event: loadEventFired

### Results

_**timestamp ( number )**_<br>


### Event: frameNavigated

Fired once navigation of the frame has completed. Frame is now associated with the new loader.

### Results

_**frame ( [Frame](#class-frame) )**_<br>
> Frame object.



### Event: frameDetached

Fired when frame has been detached from its parent.

### Results

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Id of the frame that has been detached.



## Types

### Class: ResourceType

_Type: string_

Resource type as it was perceived by the rendering engine.


### Class: Frame

_Type: object_

Information about the Frame on the page.

### Properties

_**id ( string )**_<br>
> Frame unique identifier.

_**parentId ( optional string )**_<br>
> Parent frame identifier.

_**loaderId ( [Network.LoaderId](Network.md#class-loaderid) )**_<br>
> Identifier of the loader associated with this frame.

_**name ( optional string )**_<br>
> Frame's name as specified in the tag.

_**url ( string )**_<br>
> Frame document's URL.

_**securityOrigin ( optional string )**_<br>
> Frame document's security origin.

_**mimeType ( string )**_<br>
> Frame document's mimeType as determined by the browser.



### Class: FrameResourceTree

_Type: object_

Information about the Frame hierarchy along with their cached resources.

### Properties

_**frame ( [Frame](#class-frame) )**_<br>
> Frame information for this tree item.

_**childFrames ( optional array of [FrameResourceTree](#class-frameresourcetree) )**_<br>
> Child frames.

_**resources ( array )**_<br>
> Information about frame resources.



### Class: SearchMatch

_Type: object_

Search match for resource.

### Properties

_**lineNumber ( number )**_<br>
> Line number in resource content.

_**lineContent ( string )**_<br>
> Line with match content.



### Class: SearchResult

_Type: object_

Search result for resource.

### Properties

_**url ( string )**_<br>
> Resource URL.

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Resource frame id.

_**matchesCount ( number )**_<br>
> Number of matches in the resource content.



### Class: Cookie

_Type: object_

Cookie object

### Properties

_**name ( string )**_<br>
> Cookie name.

_**value ( string )**_<br>
> Cookie value.

_**domain ( string )**_<br>
> Cookie domain.

_**path ( string )**_<br>
> Cookie path.

_**expires ( number )**_<br>
> Cookie expires.

_**size ( integer )**_<br>
> Cookie size.

_**httpOnly ( boolean )**_<br>
> True if cookie is http-only.

_**secure ( boolean )**_<br>
> True if cookie is secure.

_**session ( boolean )**_<br>
> True in case of session cookie.



### Class: ScriptIdentifier

_Type: string_

Unique script identifier.




