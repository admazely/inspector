# DOM

_Auto generated documentation for WebKit inspector

This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object that has an <code>id</code>. This <code>id</code> can be used to get additional information on the Node, resolve it into the JavaScript object wrapper, etc. It is important that client receives DOM events only for the nodes that are known to the client. Backend keeps track of the nodes that were sent to the client and never sends the same node twice. It is client's responsibility to collect information about the nodes that were sent to the client.<p>Note that <code>iframe</code> owner elements will return corresponding document elements as their child nodes.</p>


* Commands
 * [getDocument](#domgetdocumentcallback)
 * [requestChildNodes](#domrequestchildnodesnodeid-depth-callback)
 * [querySelector](#domqueryselectornodeid-selector-callback)
 * [querySelectorAll](#domqueryselectorallnodeid-selector-callback)
 * [setNodeName](#domsetnodenamenodeid-name-callback)
 * [setNodeValue](#domsetnodevaluenodeid-value-callback)
 * [removeNode](#domremovenodenodeid-callback)
 * [setAttributeValue](#domsetattributevaluenodeid-name-value-callback)
 * [setAttributesAsText](#domsetattributesastextnodeid-text-name-callback)
 * [removeAttribute](#domremoveattributenodeid-name-callback)
 * [getEventListenersForNode](#domgeteventlistenersfornodenodeid-objectgroup-callback)
 * [getAccessibilityPropertiesForNode](#domgetaccessibilitypropertiesfornodenodeid-callback)
 * [getOuterHTML](#domgetouterhtmlnodeid-callback)
 * [setOuterHTML](#domsetouterhtmlnodeid-outerhtml-callback)
 * [performSearch](#domperformsearchquery-nodeid-callback)
 * [getSearchResults](#domgetsearchresultssearchid-fromindex-toindex-callback)
 * [discardSearchResults](#domdiscardsearchresultssearchid-callback)
 * [requestNode](#domrequestnoderuntimeremoteobjectid-callback)
 * [setInspectModeEnabled](#domsetinspectmodeenabledenabled-highlightconfig-callback)
 * [highlightRect](#domhighlightrectx-y-width-height-rgbacolor-rgbacolor-usepagecoordinates-callback)
 * [highlightQuad](#domhighlightquadquad-rgbacolor-rgbacolor-usepagecoordinates-callback)
 * [highlightNode](#domhighlightnodehighlightconfig-nodeid-runtimeremoteobjectid-callback)
 * [hideHighlight](#domhidehighlightcallback)
 * [highlightFrame](#domhighlightframenetworkframeid-rgbacolor-rgbacolor-callback)
 * [pushNodeByPathToFrontend](#dompushnodebypathtofrontendpath-callback)
 * [pushNodeByBackendIdToFrontend](#dompushnodebybackendidtofrontendbackendnodeid-callback)
 * [releaseBackendNodeIds](#domreleasebackendnodeidsnodegroup-callback)
 * [resolveNode](#domresolvenodenodeid-objectgroup-callback)
 * [getAttributes](#domgetattributesnodeid-callback)
 * [moveTo](#dommovetonodeid-nodeid-nodeid-callback)
 * [undo](#domundocallback)
 * [redo](#domredocallback)
 * [markUndoableState](#dommarkundoablestatecallback)
 * [focus](#domfocusnodeid-callback)
* Events
 * [documentUpdated](#event-documentupdated)
 * [setChildNodes](#event-setchildnodes)
 * [attributeModified](#event-attributemodified)
 * [attributeRemoved](#event-attributeremoved)
 * [inlineStyleInvalidated](#event-inlinestyleinvalidated)
 * [characterDataModified](#event-characterdatamodified)
 * [childNodeCountUpdated](#event-childnodecountupdated)
 * [childNodeInserted](#event-childnodeinserted)
 * [childNodeRemoved](#event-childnoderemoved)
 * [shadowRootPushed](#event-shadowrootpushed)
 * [shadowRootPopped](#event-shadowrootpopped)
* Types
 * [NodeId](#class-nodeid)
 * [BackendNodeId](#class-backendnodeid)
 * [LiveRegionRelevant](#class-liveregionrelevant)
 * [Node](#class-node)
 * [EventListener](#class-eventlistener)
 * [AccessibilityProperties](#class-accessibilityproperties)
 * [RGBAColor](#class-rgbacolor)
 * [Quad](#class-quad)
 * [HighlightConfig](#class-highlightconfig)


## Commands

### DOM.getDocument(callback)

Returns the root DOM node to the caller.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**root ( [Node](#class-node) )**_<br>
> Resulting node.



### DOM.requestChildNodes([NodeId](#class-nodeid), [depth], callback)

Requests that children of the node with given id are returned to the caller in form of `setChildNodes` events where not only immediate children are retrieved, but all children down to the specified depth.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to get children for.

_**depth ( optional integer )**_<br>
> The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the entire subtree or provide an integer larger than 0.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.querySelector([NodeId](#class-nodeid), selector, callback)

Executes `querySelector` on a given node.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to query upon.

_**selector ( string )**_<br>
> Selector string.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Query selector result.



### DOM.querySelectorAll([NodeId](#class-nodeid), selector, callback)

Executes `querySelectorAll` on a given node.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to query upon.

_**selector ( string )**_<br>
> Selector string.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeIds ( array of [NodeId](#class-nodeid) )**_<br>
> Query selector result.



### DOM.setNodeName([NodeId](#class-nodeid), name, callback)

Sets node name for a node with given id.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to set name for.

_**name ( string )**_<br>
> New node's name.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> New node's id.



### DOM.setNodeValue([NodeId](#class-nodeid), value, callback)

Sets node value for a node with given id.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to set value for.

_**value ( string )**_<br>
> New node's value.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.removeNode([NodeId](#class-nodeid), callback)

Removes node with given id.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to remove.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.setAttributeValue([NodeId](#class-nodeid), name, value, callback)

Sets attribute for an element with given id.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the element to set attribute for.

_**name ( string )**_<br>
> Attribute name.

_**value ( string )**_<br>
> Attribute value.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.setAttributesAsText([NodeId](#class-nodeid), text, [name], callback)

Sets attributes on element with given id. This method is useful when user edits some existing attribute value and types in several attribute name/value pairs.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the element to set attributes for.

_**text ( string )**_<br>
> Text with a number of attributes. Will parse this text using HTML parser.

_**name ( optional string )**_<br>
> Attribute name to replace with new attributes derived from text in case text parsed successfully.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.removeAttribute([NodeId](#class-nodeid), name, callback)

Removes attribute with given name from an element with given id.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the element to remove attribute from.

_**name ( string )**_<br>
> Name of the attribute to remove.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.getEventListenersForNode([NodeId](#class-nodeid), [objectGroup], callback)

Returns event listeners relevant to the node.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to get listeners for.

_**objectGroup ( optional string )**_<br>
> Symbolic group name for handler value. Handler value is not returned without this parameter specified.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**listeners ( array of [EventListener](#class-eventlistener) )**_<br>
> Array of relevant listeners.



### DOM.getAccessibilityPropertiesForNode([NodeId](#class-nodeid), callback)

Returns a dictionary of accessibility properties for the node.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node for which to get accessibility properties.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**properties ( [AccessibilityProperties](#class-accessibilityproperties) )**_<br>
> Dictionary of relevant accessibility properties.



### DOM.getOuterHTML([NodeId](#class-nodeid), callback)

Returns node's HTML markup.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to get markup for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**outerHTML ( string )**_<br>
> Outer HTML markup.



### DOM.setOuterHTML([NodeId](#class-nodeid), outerHTML, callback)

Sets node HTML markup, returns new node id.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to set markup for.

_**outerHTML ( string )**_<br>
> Outer HTML markup to set.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.performSearch(query, [[NodeId](#class-nodeid)], callback)

Searches for a given string in the DOM tree. Use `getSearchResults` to access search results or `cancelSearch` to end this search session.

### Parameters

_**query ( string )**_<br>
> Plain text or query selector or XPath search query.

_**nodeIds ( optional array of [NodeId](#class-nodeid) )**_<br>
> Ids of nodes to use as starting points for the search.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**searchId ( string )**_<br>
> Unique search session identifier.

_**resultCount ( integer )**_<br>
> Number of search results.



### DOM.getSearchResults(searchId, fromIndex, toIndex, callback)

Returns search results from given `fromIndex` to given `toIndex` from the sarch with the given identifier.

### Parameters

_**searchId ( string )**_<br>
> Unique search session identifier.

_**fromIndex ( integer )**_<br>
> Start index of the search result to be returned.

_**toIndex ( integer )**_<br>
> End index of the search result to be returned.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeIds ( array of [NodeId](#class-nodeid) )**_<br>
> Ids of the search result nodes.



### DOM.discardSearchResults(searchId, callback)

Discards search results from the session with the given id. `getSearchResults` should no longer be called for that search.

### Parameters

_**searchId ( string )**_<br>
> Unique search session identifier.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.requestNode([Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid), callback)

Requests that the node is sent to the caller given the JavaScript node object reference. All nodes that form the path from the node to the root are also sent to the client as a series of `setChildNodes` notifications.

### Parameters

_**objectId ( [Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid) )**_<br>
> JavaScript object id to convert into node.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Node id for given object.



### DOM.setInspectModeEnabled(enabled, [[HighlightConfig](#class-highlightconfig)], callback)

Enters the 'inspect' mode. In this mode, elements that user is hovering over are highlighted. Backend then generates 'inspect' command upon element selection.

### Parameters

_**enabled ( boolean )**_<br>
> True to enable inspection mode, false to disable it.

_**highlightConfig ( optional [HighlightConfig](#class-highlightconfig) )**_<br>
> A descriptor for the highlight appearance of hovered-over nodes. May be omitted if <code>enabled == false</code>.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.highlightRect(x, y, width, height, [[RGBAColor](#class-rgbacolor)], [[RGBAColor](#class-rgbacolor)], [usePageCoordinates], callback)

Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport.

### Parameters

_**x ( integer )**_<br>
> X coordinate

_**y ( integer )**_<br>
> Y coordinate

_**width ( integer )**_<br>
> Rectangle width

_**height ( integer )**_<br>
> Rectangle height

_**color ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The highlight fill color (default: transparent).

_**outlineColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The highlight outline color (default: transparent).

_**usePageCoordinates ( optional boolean )**_<br>
> Indicates whether the provided parameters are in page coordinates or in viewport coordinates (the default).

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.highlightQuad([Quad](#class-quad), [[RGBAColor](#class-rgbacolor)], [[RGBAColor](#class-rgbacolor)], [usePageCoordinates], callback)

Highlights given quad. Coordinates are absolute with respect to the main frame viewport.

### Parameters

_**quad ( [Quad](#class-quad) )**_<br>
> Quad to highlight

_**color ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The highlight fill color (default: transparent).

_**outlineColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The highlight outline color (default: transparent).

_**usePageCoordinates ( optional boolean )**_<br>
> Indicates whether the provided parameters are in page coordinates or in viewport coordinates (the default).

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.highlightNode([HighlightConfig](#class-highlightconfig), [[NodeId](#class-nodeid)], [[Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid)], callback)

Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or objectId must be specified.

### Parameters

_**highlightConfig ( [HighlightConfig](#class-highlightconfig) )**_<br>
> A descriptor for the highlight appearance.

_**nodeId ( optional [NodeId](#class-nodeid) )**_<br>
> Identifier of the node to highlight.

_**objectId ( optional [Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid) )**_<br>
> JavaScript object id of the node to be highlighted.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.hideHighlight(callback)

Hides DOM node highlight.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.highlightFrame([Network.FrameId](Network.md#class-frameid), [[RGBAColor](#class-rgbacolor)], [[RGBAColor](#class-rgbacolor)], callback)

Highlights owner element of the frame with given id.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Identifier of the frame to highlight.

_**contentColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The content box highlight fill color (default: transparent).

_**contentOutlineColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The content box highlight outline color (default: transparent).

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.pushNodeByPathToFrontend(path, callback)

Requests that the node is sent to the caller given its path. // FIXME, use XPath

### Parameters

_**path ( string )**_<br>
> Path to node in the proprietary format.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node for given path.



### DOM.pushNodeByBackendIdToFrontend([BackendNodeId](#class-backendnodeid), callback)

Requests that the node is sent to the caller given its backend node id.

### Parameters

_**backendNodeId ( [BackendNodeId](#class-backendnodeid) )**_<br>
> The backend node id of the node.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> The pushed node's id.



### DOM.releaseBackendNodeIds(nodeGroup, callback)

Requests that group of `BackendNodeIds` is released.

### Parameters

_**nodeGroup ( string )**_<br>
> The backend node ids group name.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.resolveNode([NodeId](#class-nodeid), [objectGroup], callback)

Resolves JavaScript node object for given node id.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to resolve.

_**objectGroup ( optional string )**_<br>
> Symbolic group name that can be used to release multiple objects.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**object ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> JavaScript object wrapper for given node.



### DOM.getAttributes([NodeId](#class-nodeid), callback)

Returns attributes for the specified node.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to retrieve attibutes for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**attributes ( array )**_<br>
> An interleaved array of node attribute names and values.



### DOM.moveTo([NodeId](#class-nodeid), [NodeId](#class-nodeid), [[NodeId](#class-nodeid)], callback)

Moves node into the new container, places it before the given anchor.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to drop.

_**targetNodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the element to drop into.

_**insertBeforeNodeId ( optional [NodeId](#class-nodeid) )**_<br>
> Drop node before given one.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> New id of the moved node.



### DOM.undo(callback)

Undoes the last performed action.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.redo(callback)

Re-does the last undone action.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.markUndoableState(callback)

Marks last undoable state.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOM.focus([NodeId](#class-nodeid), callback)

Focuses the given element.

### Parameters

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node to focus.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: documentUpdated

Fired when `Document` has been totally updated. Node ids are no longer valid.


### Event: setChildNodes

Fired when backend wants to provide client with the missing DOM structure. This happens upon most of the calls requesting node ids.

### Results

_**parentId ( [NodeId](#class-nodeid) )**_<br>
> Parent node id to populate with children.

_**nodes ( array of [Node](#class-node) )**_<br>
> Child nodes array.



### Event: attributeModified

Fired when `Element`'s attribute is modified.

### Results

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node that has changed.

_**name ( string )**_<br>
> Attribute name.

_**value ( string )**_<br>
> Attribute value.



### Event: attributeRemoved

Fired when `Element`'s attribute is removed.

### Results

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node that has changed.

_**name ( string )**_<br>
> A ttribute name.



### Event: inlineStyleInvalidated

Fired when `Element`'s inline style is modified via a CSS property modification.

### Results

_**nodeIds ( array of [NodeId](#class-nodeid) )**_<br>
> Ids of the nodes for which the inline styles have been invalidated.



### Event: characterDataModified

Mirrors `DOMCharacterDataModified` event.

### Results

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node that has changed.

_**characterData ( string )**_<br>
> New text value.



### Event: childNodeCountUpdated

Fired when `Container`'s child node count has changed.

### Results

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node that has changed.

_**childNodeCount ( integer )**_<br>
> New node count.



### Event: childNodeInserted

Mirrors `DOMNodeInserted` event.

### Results

_**parentNodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node that has changed.

_**previousNodeId ( [NodeId](#class-nodeid) )**_<br>
> If of the previous siblint.

_**node ( [Node](#class-node) )**_<br>
> Inserted node data.



### Event: childNodeRemoved

Mirrors `DOMNodeRemoved` event.

### Results

_**parentNodeId ( [NodeId](#class-nodeid) )**_<br>
> Parent id.

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Id of the node that has been removed.



### Event: shadowRootPushed

Called when shadow root is pushed into the element.

### Results

_**hostId ( [NodeId](#class-nodeid) )**_<br>
> Host element id.

_**root ( [Node](#class-node) )**_<br>
> Shadow root.



### Event: shadowRootPopped

Called when shadow root is popped from the element.

### Results

_**hostId ( [NodeId](#class-nodeid) )**_<br>
> Host element id.

_**rootId ( [NodeId](#class-nodeid) )**_<br>
> Shadow root id.



## Types

### Class: NodeId

_Type: integer_

Unique DOM node identifier.


### Class: BackendNodeId

_Type: integer_

Unique DOM node identifier used to reference a node that may not have been pushed to the front-end.


### Class: LiveRegionRelevant

_Type: string_

Token values of @aria-relevant attribute.


### Class: Node

_Type: object_

DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes. DOMNode is a base node mirror type.

### Properties

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Node identifier that is passed into the rest of the DOM messages as the <code>nodeId</code>. Backend will only push node with given <code>id</code> once. It is aware of all requested nodes and will only fire DOM events for nodes known to the client.

_**nodeType ( integer )**_<br>
> <code>Node</code>'s nodeType.

_**nodeName ( string )**_<br>
> <code>Node</code>'s nodeName.

_**localName ( string )**_<br>
> <code>Node</code>'s localName.

_**nodeValue ( string )**_<br>
> <code>Node</code>'s nodeValue.

_**childNodeCount ( optional integer )**_<br>
> Child count for <code>Container</code> nodes.

_**children ( optional array of [Node](#class-node) )**_<br>
> Child nodes of this node when requested with children.

_**attributes ( optional array )**_<br>
> Attributes of the <code>Element</code> node in the form of flat array <code>[name1, value1, name2, value2]</code>.

_**documentURL ( optional string )**_<br>
> Document URL that <code>Document</code> or <code>FrameOwner</code> node points to.

_**baseURL ( optional string )**_<br>
> Base URL that <code>Document</code> or <code>FrameOwner</code> node uses for URL completion.

_**publicId ( optional string )**_<br>
> <code>DocumentType</code>'s publicId.

_**systemId ( optional string )**_<br>
> <code>DocumentType</code>'s systemId.

_**internalSubset ( optional string )**_<br>
> <code>DocumentType</code>'s internalSubset.

_**xmlVersion ( optional string )**_<br>
> <code>Document</code>'s XML version in case of XML documents.

_**name ( optional string )**_<br>
> <code>Attr</code>'s name.

_**value ( optional string )**_<br>
> <code>Attr</code>'s value.

_**frameId ( optional [Network.FrameId](Network.md#class-frameid) )**_<br>
> Frame ID for frame owner elements.

_**contentDocument ( optional [Node](#class-node) )**_<br>
> Content document for frame owner elements.

_**shadowRoots ( optional array of [Node](#class-node) )**_<br>
> Shadow root list for given element host.

_**templateContent ( optional [Node](#class-node) )**_<br>
> Content document fragment for template elements

_**role ( optional string )**_<br>
> Computed value for first recognized role token, default role per element, or overridden role.



### Class: EventListener

_Type: object_

A structure holding event listener properties.

### Properties

_**type ( string )**_<br>
> <code>EventListener</code>'s type.

_**useCapture ( boolean )**_<br>
> <code>EventListener</code>'s useCapture.

_**isAttribute ( boolean )**_<br>
> <code>EventListener</code>'s isAttribute.

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Target <code>DOMNode</code> id.

_**handlerBody ( string )**_<br>
> Event handler function body.

_**location ( optional [Debugger.Location](Debugger.md#class-location) )**_<br>
> Handler code location.

_**sourceName ( optional string )**_<br>
> Source script URL.

_**handler ( optional [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Event handler function value.



### Class: AccessibilityProperties

_Type: object_

A structure holding accessibility properties.

### Properties

_**activeDescendantNodeId ( optional [NodeId](#class-nodeid) )**_<br>
> <code>DOMNode</code> id of the accessibility object referenced by aria-activedescendant.

_**busy ( optional boolean )**_<br>
> Value of @aria-busy on current or ancestor node.

_**checked ( optional string enumerated ["true","false","mixed"] )**_<br>
> Checked state of certain form controls.

_**childNodeIds ( optional array of [NodeId](#class-nodeid) )**_<br>
> Array of <code>DOMNode</code> ids of the accessibility tree children if available.

_**controlledNodeIds ( optional array of [NodeId](#class-nodeid) )**_<br>
> Array of <code>DOMNode</code> ids of any nodes referenced via @aria-controls.

_**disabled ( optional boolean )**_<br>
> Disabled state of form controls.

_**exists ( boolean )**_<br>
> Indicates whether there is an existing AX object for the DOM node. If this is false, all the other properties will be default values.

_**expanded ( optional boolean )**_<br>
> Expanded state.

_**flowedNodeIds ( optional array of [NodeId](#class-nodeid) )**_<br>
> Array of <code>DOMNode</code> ids of any nodes referenced via @aria-flowto.

_**focused ( optional boolean )**_<br>
> Focused state. Only defined on focusable elements.

_**ignored ( optional boolean )**_<br>
> Indicates whether the accessibility of the associated AX object node is ignored, whether heuristically or explicitly.

_**ignoredByDefault ( optional boolean )**_<br>
> State indicating whether the accessibility of the associated AX object node is ignored by default for node type.

_**invalid ( optional string enumerated ["true","false","grammar","spelling"] )**_<br>
> Invalid status of form controls.

_**hidden ( optional boolean )**_<br>
> Hidden state. True if node or an ancestor is hidden via CSS or explicit @aria-hidden, to clarify why the element is ignored.

_**label ( string )**_<br>
> Computed label value for the node, sometimes calculated by referencing other nodes.

_**liveRegionAtomic ( optional boolean )**_<br>
> Value of @aria-atomic.

_**liveRegionRelevant ( optional array )**_<br>
> Token value(s) of element's @aria-relevant attribute. Array of string values matching $ref LiveRegionRelevant. FIXME: Enum values blocked by http://webkit.org/b/133711

_**liveRegionStatus ( optional string enumerated ["assertive","polite","off"] )**_<br>
> Value of element's @aria-live attribute.

_**mouseEventNodeId ( optional [NodeId](#class-nodeid) )**_<br>
> <code>DOMNode</code> id of node or closest ancestor node that has a mousedown, mouseup, or click event handler.

_**nodeId ( [NodeId](#class-nodeid) )**_<br>
> Target <code>DOMNode</code> id.

_**ownedNodeIds ( optional array of [NodeId](#class-nodeid) )**_<br>
> Array of <code>DOMNode</code> ids of any nodes referenced via @aria-owns.

_**parentNodeId ( optional [NodeId](#class-nodeid) )**_<br>
> <code>DOMNode</code> id of the accessibility tree parent object if available.

_**pressed ( optional boolean )**_<br>
> Pressed state for toggle buttons.

_**readonly ( optional boolean )**_<br>
> Readonly state of text controls.

_**required ( optional boolean )**_<br>
> Required state of form controls.

_**role ( string )**_<br>
> Computed value for first recognized role token, default role per element, or overridden role.

_**selected ( optional boolean )**_<br>
> Selected state of certain form controls.

_**selectedChildNodeIds ( optional array of [NodeId](#class-nodeid) )**_<br>
> Array of <code>DOMNode</code> ids of any children marked as selected.



### Class: RGBAColor

_Type: object_

A structure holding an RGBA color.

### Properties

_**r ( integer )**_<br>
> The red component, in the [0-255] range.

_**g ( integer )**_<br>
> The green component, in the [0-255] range.

_**b ( integer )**_<br>
> The blue component, in the [0-255] range.

_**a ( optional number )**_<br>
> The alpha component, in the [0-1] range (default: 1).



### Class: Quad

_Type: array_

An array of quad vertices, x immediately followed by y for each point, points clock-wise.


### Class: HighlightConfig

_Type: object_

Configuration data for the highlighting of page elements.

### Properties

_**showInfo ( optional boolean )**_<br>
> Whether the node info tooltip should be shown (default: false).

_**contentColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The content box highlight fill color (default: transparent).

_**paddingColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The padding highlight fill color (default: transparent).

_**borderColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The border highlight fill color (default: transparent).

_**marginColor ( optional [RGBAColor](#class-rgbacolor) )**_<br>
> The margin highlight fill color (default: transparent).





