# Canvas

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [enable](#canvasenablecallback)
 * [disable](#canvasdisablecallback)
 * [dropTraceLog](#canvasdroptracelogtracelogid-callback)
 * [captureFrame](#canvascaptureframecallback)
 * [getTraceLog](#canvasgettracelogtracelogid-callback)
 * [replayTraceLog](#canvasreplaytracelogtracelogid-stepno-callback)
* Types
 * [TraceLogId](#class-tracelogid)
 * [Call](#class-call)
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

_**traceLogId ( [TraceLogId](#class-tracelogid))**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Canvas.captureFrame(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**traceLogId ( [TraceLogId](#class-tracelogid))**_<br>


### Canvas.getTraceLog([TraceLogId](#class-tracelogid), callback)

### Parameters

_**traceLogId ( [TraceLogId](#class-tracelogid))**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**traceLog ( [TraceLog](#class-tracelog))**_<br>


### Canvas.replayTraceLog([TraceLogId](#class-tracelogid), stepNo, callback)

### Parameters

_**traceLogId ( [TraceLogId](#class-tracelogid))**_<br>
_**stepNo ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**screenshotDataUrl ( string )**_<br>


## Types

### Class: TraceLogId

_Type: string_


### Class: Call

_Type: object_

### Properties

_**functionName ( string )**_<br>
_**arguments ( array )**_<br>
_**result ( optional string )**_<br>
_**sourceURL ( optional string )**_<br>
_**lineNumber ( optional integer )**_<br>
_**columnNumber ( optional integer )**_<br>


### Class: TraceLog

_Type: object_

### Properties

_**id ( [TraceLogId](#class-tracelogid))**_<br>
_**calls ( array of [Call](#class-call))**_<br>




