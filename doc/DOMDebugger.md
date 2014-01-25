# DOMDebugger

_Auto generated documentation for WebKit inspector

DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript execution will stop on these operations as if there was a regular breakpoint set.


* Commands
 * [setDOMBreakpoint](#domdebuggersetdombreakpointdomnodeid-dombreakpointtype-callback)
 * [removeDOMBreakpoint](#domdebuggerremovedombreakpointdomnodeid-dombreakpointtype-callback)
 * [setEventListenerBreakpoint](#domdebuggerseteventlistenerbreakpointeventname-callback)
 * [removeEventListenerBreakpoint](#domdebuggerremoveeventlistenerbreakpointeventname-callback)
 * [setInstrumentationBreakpoint](#domdebuggersetinstrumentationbreakpointeventname-callback)
 * [removeInstrumentationBreakpoint](#domdebuggerremoveinstrumentationbreakpointeventname-callback)
 * [setXHRBreakpoint](#domdebuggersetxhrbreakpointurl-callback)
 * [removeXHRBreakpoint](#domdebuggerremovexhrbreakpointurl-callback)
* Types
 * [DOMBreakpointType](#class-dombreakpointtype)


## Commands

### DOMDebugger.setDOMBreakpoint([DOM.NodeId](DOM.md#class-nodeid), [DOMBreakpointType](#class-dombreakpointtype), callback)

Sets breakpoint on particular operation with DOM.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> Identifier of the node to set breakpoint on.

_**type ( [DOMBreakpointType](#class-dombreakpointtype) )**_<br>
> Type of the operation to stop upon.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMDebugger.removeDOMBreakpoint([DOM.NodeId](DOM.md#class-nodeid), [DOMBreakpointType](#class-dombreakpointtype), callback)

Removes DOM breakpoint that was set using `setDOMBreakpoint`.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> Identifier of the node to remove breakpoint from.

_**type ( [DOMBreakpointType](#class-dombreakpointtype) )**_<br>
> Type of the breakpoint to remove.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMDebugger.setEventListenerBreakpoint(eventName, callback)

Sets breakpoint on particular DOM event.

### Parameters

_**eventName ( string )**_<br>
> DOM Event name to stop on (any DOM event will do).

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMDebugger.removeEventListenerBreakpoint(eventName, callback)

Removes breakpoint on particular DOM event.

### Parameters

_**eventName ( string )**_<br>
> Event name.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMDebugger.setInstrumentationBreakpoint(eventName, callback)

Sets breakpoint on particular native event.

### Parameters

_**eventName ( string )**_<br>
> Instrumentation name to stop on.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMDebugger.removeInstrumentationBreakpoint(eventName, callback)

Sets breakpoint on particular native event.

### Parameters

_**eventName ( string )**_<br>
> Instrumentation name to stop on.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMDebugger.setXHRBreakpoint(url, callback)

Sets breakpoint on XMLHttpRequest.

### Parameters

_**url ( string )**_<br>
> Resource URL substring. All XHRs having this substring in the URL will get stopped upon.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMDebugger.removeXHRBreakpoint(url, callback)

Removes breakpoint from XMLHttpRequest.

### Parameters

_**url ( string )**_<br>
> Resource URL substring.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Types

### Class: DOMBreakpointType

_Type: string_

DOM breakpoint type.




