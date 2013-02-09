# Canvas

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [enable](#canvasenablecallback)
 * [disable](#canvasdisablecallback)
 * [dropTraceLog](#canvasdroptracelogtracelogid-callback)
 * [hasUninstrumentedCanvases](#canvashasuninstrumentedcanvasescallback)
 * [captureFrame](#canvascaptureframenetworkframeid-callback)
 * [startCapturing](#canvasstartcapturingnetworkframeid-callback)
 * [stopCapturing](#canvasstopcapturingtracelogid-callback)
 * [getTraceLog](#canvasgettracelogtracelogid-startoffset-maxlength-callback)
 * [replayTraceLog](#canvasreplaytracelogtracelogid-stepno-callback)
 * [getResourceInfo](#canvasgetresourceinforesourceid-callback)
 * [getResourceState](#canvasgetresourcestatetracelogid-resourceid-callback)
* Events
 * [contextCreated](#event-contextcreated)
 * [traceLogsRemoved](#event-tracelogsremoved)
* Types
 * [ResourceId](#class-resourceid)
 * [ResourceInfo](#class-resourceinfo)
 * [ResourceState](#class-resourcestate)
 * [CallArgument](#class-callargument)
 * [Call](#class-call)
 * [TraceLogId](#class-tracelogid)
 * [TraceLog](#class-tracelog)


## Commands

### Canvas.enable(callback)

Enables Canvas inspection.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Canvas.disable(callback)

Disables Canvas inspection.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Canvas.dropTraceLog([TraceLogId](#class-tracelogid), callback)

### Parameters

_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Canvas.hasUninstrumentedCanvases(callback)

Checks if there is any uninstrumented canvas in the inspected page.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>


### Canvas.captureFrame([[Network.FrameId](Network.md#class-frameid)], callback)

Starts (or continues) a canvas frame capturing which will be stopped automatically after the next frame is prepared.

### Parameters

_**frameId ( optional [Network.FrameId](Network.md#class-frameid) )**_<br>
> Identifier of the frame containing document whose canvases are to be captured. If omitted, main frame is assumed.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
> Identifier of the trace log containing captured canvas calls.



### Canvas.startCapturing([[Network.FrameId](Network.md#class-frameid)], callback)

Starts (or continues) consecutive canvas frames capturing. The capturing is stopped by the corresponding stopCapturing command.

### Parameters

_**frameId ( optional [Network.FrameId](Network.md#class-frameid) )**_<br>
> Identifier of the frame containing document whose canvases are to be captured. If omitted, main frame is assumed.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
> Identifier of the trace log containing captured canvas calls.



### Canvas.stopCapturing([TraceLogId](#class-tracelogid), callback)

### Parameters

_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Canvas.getTraceLog([TraceLogId](#class-tracelogid), [startOffset], [maxLength], callback)

### Parameters

_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
_**startOffset ( optional integer )**_<br>
_**maxLength ( optional integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**traceLog ( [TraceLog](#class-tracelog) )**_<br>


### Canvas.replayTraceLog([TraceLogId](#class-tracelogid), stepNo, callback)

### Parameters

_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
_**stepNo ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**resourceState ( [ResourceState](#class-resourcestate) )**_<br>


### Canvas.getResourceInfo([ResourceId](#class-resourceid), callback)

### Parameters

_**resourceId ( [ResourceId](#class-resourceid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**resourceInfo ( [ResourceInfo](#class-resourceinfo) )**_<br>


### Canvas.getResourceState([TraceLogId](#class-tracelogid), [ResourceId](#class-resourceid), callback)

### Parameters

_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
_**resourceId ( [ResourceId](#class-resourceid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**resourceState ( [ResourceState](#class-resourcestate) )**_<br>


## Events

### Event: contextCreated

Fired when a canvas context has been created in the given frame. The context may not be instrumented (see hasUninstrumentedCanvases command).

### Results

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Identifier of the frame containing a canvas with a context.



### Event: traceLogsRemoved

Fired when a set of trace logs were removed from the backend. If no parameters are given, all trace logs were removed.

### Results

_**frameId ( optional [Network.FrameId](Network.md#class-frameid) )**_<br>
> If given, trace logs from the given frame were removed.

_**traceLogId ( optional [TraceLogId](#class-tracelogid) )**_<br>
> If given, trace log with the given ID was removed.



## Types

### Class: ResourceId

_Type: string_

Unique resource identifier.


### Class: ResourceInfo

_Type: object_

### Properties

_**id ( [ResourceId](#class-resourceid) )**_<br>
_**description ( string )**_<br>


### Class: ResourceState

_Type: object_

### Properties

_**id ( [ResourceId](#class-resourceid) )**_<br>
_**traceLogId ( [TraceLogId](#class-tracelogid) )**_<br>
_**imageURL ( optional string )**_<br>
> Screenshot image data URL.



### Class: CallArgument

_Type: object_

### Properties

_**description ( string )**_<br>


### Class: Call

_Type: object_

### Properties

_**contextId ( [ResourceId](#class-resourceid) )**_<br>
_**functionName ( optional string )**_<br>
_**arguments ( optional array of [CallArgument](#class-callargument) )**_<br>
_**result ( optional [CallArgument](#class-callargument) )**_<br>
_**isDrawingCall ( optional boolean )**_<br>
_**property ( optional string )**_<br>
_**value ( optional [CallArgument](#class-callargument) )**_<br>
_**sourceURL ( optional string )**_<br>
_**lineNumber ( optional integer )**_<br>
_**columnNumber ( optional integer )**_<br>


### Class: TraceLogId

_Type: string_

Unique trace log identifier.


### Class: TraceLog

_Type: object_

### Properties

_**id ( [TraceLogId](#class-tracelogid) )**_<br>
_**calls ( array of [Call](#class-call) )**_<br>
_**startOffset ( integer )**_<br>
_**alive ( boolean )**_<br>
_**totalAvailableCalls ( number )**_<br>




