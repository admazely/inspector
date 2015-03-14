# Page

_Auto generated documentation for WebKit inspector

Actions and events related to the inspected page belong to the page domain.


* Commands
 * [enable](#pageenablecallback)
 * [disable](#pagedisablecallback)
 * [addScriptToEvaluateOnLoad](#pageaddscripttoevaluateonloadscriptsource-callback)
 * [removeScriptToEvaluateOnLoad](#pageremovescripttoevaluateonloadscriptidentifier-callback)
 * [reload](#pagereloadignorecache-scripttoevaluateonload-callback)
 * [navigate](#pagenavigateurl-callback)
 * [getCookies](#pagegetcookiescallback)
 * [deleteCookie](#pagedeletecookiecookiename-url-callback)
 * [getResourceTree](#pagegetresourcetreecallback)
 * [getResourceContent](#pagegetresourcecontentnetworkframeid-url-callback)
 * [searchInResource](#pagesearchinresourcenetworkframeid-url-query-casesensitive-isregex-callback)
 * [searchInResources](#pagesearchinresourcestext-casesensitive-isregex-callback)
 * [setDocumentContent](#pagesetdocumentcontentnetworkframeid-html-callback)
 * [setShowPaintRects](#pagesetshowpaintrectsresult-callback)
 * [getScriptExecutionStatus](#pagegetscriptexecutionstatuscallback)
 * [setScriptExecutionDisabled](#pagesetscriptexecutiondisabledvalue-callback)
 * [setTouchEmulationEnabled](#pagesettouchemulationenabledenabled-callback)
 * [setEmulatedMedia](#pagesetemulatedmediamedia-callback)
 * [getCompositingBordersVisible](#pagegetcompositingbordersvisiblecallback)
 * [setCompositingBordersVisible](#pagesetcompositingbordersvisiblevisible-callback)
 * [snapshotNode](#pagesnapshotnodedomnodeid-callback)
 * [snapshotRect](#pagesnapshotrectx-y-width-height-coordinatesystem-callback)
 * [handleJavaScriptDialog](#pagehandlejavascriptdialogaccept-prompttext-callback)
 * [archive](#pagearchivecallback)
* Events
 * [domContentEventFired](#event-domcontenteventfired)
 * [loadEventFired](#event-loadeventfired)
 * [frameNavigated](#event-framenavigated)
 * [frameDetached](#event-framedetached)
 * [frameStartedLoading](#event-framestartedloading)
 * [frameStoppedLoading](#event-framestoppedloading)
 * [frameScheduledNavigation](#event-frameschedulednavigation)
 * [frameClearedScheduledNavigation](#event-frameclearedschedulednavigation)
 * [javascriptDialogOpening](#event-javascriptdialogopening)
 * [javascriptDialogClosed](#event-javascriptdialogclosed)
 * [scriptsEnabled](#event-scriptsenabled)
* Types
 * [ResourceType](#class-resourcetype)
 * [CoordinateSystem](#class-coordinatesystem)
 * [Frame](#class-frame)
 * [FrameResource](#class-frameresource)
 * [FrameResourceTree](#class-frameresourcetree)
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

Returns all browser cookies. Depending on the backend support, will return detailed cookie information in the `cookies` field.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**cookies ( array of [Cookie](#class-cookie) )**_<br>
> Array of cookie objects.



### Page.deleteCookie(cookieName, url, callback)

Deletes browser cookie with given name, domain and path.

### Parameters

_**cookieName ( string )**_<br>
> Name of the cookie to remove.

_**url ( string )**_<br>
> URL to match cooke domain and path.

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
_**result ( array of [GenericTypes.SearchMatch](GenericTypes.md#class-searchmatch) )**_<br>
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


### Page.setTouchEmulationEnabled(enabled, callback)

Toggles mouse event-based touch event emulation.

### Parameters

_**enabled ( boolean )**_<br>
> Whether the touch event emulation should be enabled.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.setEmulatedMedia(media, callback)

Emulates the given media for CSS media queries.

### Parameters

_**media ( string )**_<br>
> Media type to emulate. Empty string disables the override.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.getCompositingBordersVisible(callback)

Indicates the visibility of compositing borders.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> If true, compositing borders are visible.



### Page.setCompositingBordersVisible(visible, callback)

Controls the visibility of compositing borders.

### Parameters

_**visible ( boolean )**_<br>
> True for showing compositing borders.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.snapshotNode([DOM.NodeId](DOM.md#class-nodeid), callback)

Capture a snapshot of the specified node that does not include unrelated layers.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> Id of the node to snapshot.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**dataURL ( string )**_<br>
> Base64-encoded image data (PNG).



### Page.snapshotRect(x, y, width, height, [CoordinateSystem](#class-coordinatesystem), callback)

Capture a snapshot of the page within the specified rectangle and coordinate system.

### Parameters

_**x ( integer )**_<br>
> X coordinate

_**y ( integer )**_<br>
> Y coordinate

_**width ( integer )**_<br>
> Rectangle width

_**height ( integer )**_<br>
> Rectangle height

_**coordinateSystem ( [CoordinateSystem](#class-coordinatesystem) )**_<br>
> Indicates the coordinate system of the supplied rectangle.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**dataURL ( string )**_<br>
> Base64-encoded image data (PNG).



### Page.handleJavaScriptDialog(accept, [promptText], callback)

Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).

### Parameters

_**accept ( boolean )**_<br>
> Whether to accept or dismiss the dialog.

_**promptText ( optional string )**_<br>
> The text to enter into the dialog prompt before accepting. Used only if this is a prompt dialog.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Page.archive(callback)

Grab an archive of the page.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**data ( string )**_<br>
> Base64-encoded web archive.



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



### Event: frameStartedLoading

Fired when frame has started loading.

### Results

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Id of the frame that has started loading.



### Event: frameStoppedLoading

Fired when frame has stopped loading.

### Results

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Id of the frame that has stopped loading.



### Event: frameScheduledNavigation

Fired when frame schedules a potential navigation.

### Results

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Id of the frame that has scheduled a navigation.

_**delay ( number )**_<br>
> Delay (in seconds) until the navigation is scheduled to begin. The navigation is not guaranteed to start.



### Event: frameClearedScheduledNavigation

Fired when frame no longer has a scheduled navigation.

### Results

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Id of the frame that has cleared its scheduled navigation.



### Event: javascriptDialogOpening

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to open.

### Results

_**message ( string )**_<br>
> Message that will be displayed by the dialog.



### Event: javascriptDialogClosed

Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been closed.


### Event: scriptsEnabled

Fired when the JavaScript is enabled/disabled on the page

### Results

_**isEnabled ( boolean )**_<br>
> Whether script execution is enabled or disabled on the page.



## Types

### Class: ResourceType

_Type: string_

Resource type as it was perceived by the rendering engine.


### Class: CoordinateSystem

_Type: string_

Coordinate system used by supplied coordinates.


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

_**securityOrigin ( string )**_<br>
> Frame document's security origin.

_**mimeType ( string )**_<br>
> Frame document's mimeType as determined by the browser.



### Class: FrameResource

_Type: object_

### Properties

_**url ( string )**_<br>
> Resource URL.

_**type ( [ResourceType](#class-resourcetype) )**_<br>
> Type of this resource.

_**mimeType ( string )**_<br>
> Resource mimeType as determined by the browser.

_**failed ( optional boolean )**_<br>
> True if the resource failed to load.

_**canceled ( optional boolean )**_<br>
> True if the resource was canceled during loading.

_**sourceMapURL ( optional string )**_<br>
> URL of source map associated with this resource (if any).



### Class: FrameResourceTree

_Type: object_

Information about the Frame hierarchy along with their cached resources.

### Properties

_**frame ( [Frame](#class-frame) )**_<br>
> Frame information for this tree item.

_**childFrames ( optional array of [FrameResourceTree](#class-frameresourcetree) )**_<br>
> Child frames.

_**resources ( array of [FrameResource](#class-frameresource) )**_<br>
> Information about frame resources.



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




