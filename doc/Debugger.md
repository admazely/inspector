# Debugger

_Auto generated documentation for WebKit inspector

Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.


* Commands
 * [enable](#debuggerenablecallback)
 * [disable](#debuggerdisablecallback)
 * [setBreakpointsActive](#debuggersetbreakpointsactiveactive-callback)
 * [setBreakpointByUrl](#debuggersetbreakpointbyurllinenumber-url-urlregex-columnnumber-breakpointoptions-callback)
 * [setBreakpoint](#debuggersetbreakpointlocation-breakpointoptions-callback)
 * [removeBreakpoint](#debuggerremovebreakpointbreakpointid-callback)
 * [continueToLocation](#debuggercontinuetolocationlocation-callback)
 * [stepOver](#debuggerstepovercallback)
 * [stepInto](#debuggerstepintocallback)
 * [stepOut](#debuggerstepoutcallback)
 * [pause](#debuggerpausecallback)
 * [resume](#debuggerresumecallback)
 * [searchInContent](#debuggersearchincontentscriptid-query-casesensitive-isregex-callback)
 * [getScriptSource](#debuggergetscriptsourcescriptid-callback)
 * [getFunctionDetails](#debuggergetfunctiondetailsruntimeremoteobjectid-callback)
 * [setPauseOnExceptions](#debuggersetpauseonexceptionsstate-callback)
 * [evaluateOnCallFrame](#debuggerevaluateoncallframecallframeid-expression-objectgroup-includecommandlineapi-donotpauseonexceptionsandmuteconsole-returnbyvalue-generatepreview-saveresult-callback)
 * [setOverlayMessage](#debuggersetoverlaymessagemessage-callback)
* Events
 * [globalObjectCleared](#event-globalobjectcleared)
 * [scriptParsed](#event-scriptparsed)
 * [scriptFailedToParse](#event-scriptfailedtoparse)
 * [breakpointResolved](#event-breakpointresolved)
 * [paused](#event-paused)
 * [resumed](#event-resumed)
 * [didSampleProbe](#event-didsampleprobe)
 * [playBreakpointActionSound](#event-playbreakpointactionsound)
* Types
 * [BreakpointId](#class-breakpointid)
 * [BreakpointActionIdentifier](#class-breakpointactionidentifier)
 * [ScriptId](#class-scriptid)
 * [CallFrameId](#class-callframeid)
 * [Location](#class-location)
 * [BreakpointAction](#class-breakpointaction)
 * [BreakpointOptions](#class-breakpointoptions)
 * [FunctionDetails](#class-functiondetails)
 * [CallFrame](#class-callframe)
 * [Scope](#class-scope)
 * [ProbeSample](#class-probesample)
 * [AssertPauseReason](#class-assertpausereason)
 * [BreakpointPauseReason](#class-breakpointpausereason)
 * [CSPViolationPauseReason](#class-cspviolationpausereason)


## Commands

### Debugger.enable(callback)

Enables debugger for the given page. Clients should not assume that the debugging has been enabled until the result for this command is received.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.disable(callback)

Disables debugger for given page.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.setBreakpointsActive(active, callback)

Activates / deactivates all breakpoints on the page.

### Parameters

_**active ( boolean )**_<br>
> New value for breakpoints active state.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.setBreakpointByUrl(lineNumber, [url], [urlRegex], [columnNumber], [[BreakpointOptions](#class-breakpointoptions)], callback)

Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in `locations` property. Further matching script parsing will result in subsequent `breakpointResolved` events issued. This logical breakpoint will survive page reloads.

### Parameters

_**lineNumber ( integer )**_<br>
> Line number to set breakpoint at.

_**url ( optional string )**_<br>
> URL of the resources to set breakpoint on.

_**urlRegex ( optional string )**_<br>
> Regex pattern for the URLs of the resources to set breakpoints on. Either <code>url</code> or <code>urlRegex</code> must be specified.

_**columnNumber ( optional integer )**_<br>
> Offset in the line to set breakpoint at.

_**options ( optional [BreakpointOptions](#class-breakpointoptions) )**_<br>
> Options to apply to this breakpoint to modify its behavior.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**breakpointId ( [BreakpointId](#class-breakpointid) )**_<br>
> Id of the created breakpoint for further reference.

_**locations ( array of [Location](#class-location) )**_<br>
> List of the locations this breakpoint resolved into upon addition.



### Debugger.setBreakpoint([Location](#class-location), [[BreakpointOptions](#class-breakpointoptions)], callback)

Sets JavaScript breakpoint at a given location.

### Parameters

_**location ( [Location](#class-location) )**_<br>
> Location to set breakpoint in.

_**options ( optional [BreakpointOptions](#class-breakpointoptions) )**_<br>
> Options to apply to this breakpoint to modify its behavior.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**breakpointId ( [BreakpointId](#class-breakpointid) )**_<br>
> Id of the created breakpoint for further reference.

_**actualLocation ( [Location](#class-location) )**_<br>
> Location this breakpoint resolved into.



### Debugger.removeBreakpoint([BreakpointId](#class-breakpointid), callback)

Removes JavaScript breakpoint.

### Parameters

_**breakpointId ( [BreakpointId](#class-breakpointid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.continueToLocation([Location](#class-location), callback)

Continues execution until specific location is reached.

### Parameters

_**location ( [Location](#class-location) )**_<br>
> Location to continue to.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.stepOver(callback)

Steps over the statement.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.stepInto(callback)

Steps into the function call.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.stepOut(callback)

Steps out of the function call.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.pause(callback)

Stops on the next JavaScript statement.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.resume(callback)

Resumes JavaScript execution.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.searchInContent([ScriptId](#class-scriptid), query, [caseSensitive], [isRegex], callback)

Searches for given string in script content.

### Parameters

_**scriptId ( [ScriptId](#class-scriptid) )**_<br>
> Id of the script to search in.

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



### Debugger.getScriptSource([ScriptId](#class-scriptid), callback)

Returns source for the script with given id.

### Parameters

_**scriptId ( [ScriptId](#class-scriptid) )**_<br>
> Id of the script to get source for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**scriptSource ( string )**_<br>
> Script source.



### Debugger.getFunctionDetails([Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid), callback)

Returns detailed information on given function.

### Parameters

_**functionId ( [Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid) )**_<br>
> Id of the function to get location for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**details ( [FunctionDetails](#class-functiondetails) )**_<br>
> Information about the function.



### Debugger.setPauseOnExceptions(state, callback)

Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is `none`.

### Parameters

_**state ( string enumerated ["none","uncaught","all"] )**_<br>
> Pause on exceptions mode.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.evaluateOnCallFrame([CallFrameId](#class-callframeid), expression, [objectGroup], [includeCommandLineAPI], [doNotPauseOnExceptionsAndMuteConsole], [returnByValue], [generatePreview], [saveResult], callback)

Evaluates expression on a given call frame.

### Parameters

_**callFrameId ( [CallFrameId](#class-callframeid) )**_<br>
> Call frame identifier to evaluate on.

_**expression ( string )**_<br>
> Expression to evaluate.

_**objectGroup ( optional string )**_<br>
> String object group name to put result into (allows rapid releasing resulting object handles using <code>releaseObjectGroup</code>).

_**includeCommandLineAPI ( optional boolean )**_<br>
> Specifies whether command line API should be available to the evaluated expression, defaults to false.

_**doNotPauseOnExceptionsAndMuteConsole ( optional boolean )**_<br>
> Specifies whether evaluation should stop on exceptions and mute console. Overrides setPauseOnException state.

_**returnByValue ( optional boolean )**_<br>
> Whether the result is expected to be a JSON object that should be sent by value.

_**generatePreview ( optional boolean )**_<br>
> Whether preview should be generated for the result.

_**saveResult ( optional boolean )**_<br>
> Whether the resulting value should be considered for saving in the $n history.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Object wrapper for the evaluation result.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the evaluation.

_**savedResultIndex ( optional integer )**_<br>
> If the result was saved, this is the $n index that can be used to access the value.



### Debugger.setOverlayMessage([message], callback)

Sets overlay message.

### Parameters

_**message ( optional string )**_<br>
> Overlay message to display when paused in debugger.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: globalObjectCleared

Called when global has been cleared and debugger client should reset its state. Happens upon navigation or reload.


### Event: scriptParsed

Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger.

### Results

_**scriptId ( [ScriptId](#class-scriptid) )**_<br>
> Identifier of the script parsed.

_**url ( string )**_<br>
> URL or name of the script parsed (if any).

_**startLine ( integer )**_<br>
> Line offset of the script within the resource with given URL (for script tags).

_**startColumn ( integer )**_<br>
> Column offset of the script within the resource with given URL.

_**endLine ( integer )**_<br>
> Last line of the script.

_**endColumn ( integer )**_<br>
> Length of the last line of the script.

_**isContentScript ( optional boolean )**_<br>
> Determines whether this script is a user extension script.

_**sourceMapURL ( optional string )**_<br>
> URL of source map associated with script (if any).

_**hasSourceURL ( optional boolean )**_<br>
> True, if this script has sourceURL.



### Event: scriptFailedToParse

Fired when virtual machine fails to parse the script.

### Results

_**url ( string )**_<br>
> URL of the script that failed to parse.

_**scriptSource ( string )**_<br>
> Source text of the script that failed to parse.

_**startLine ( integer )**_<br>
> Line offset of the script within the resource.

_**errorLine ( integer )**_<br>
> Line with error.

_**errorMessage ( string )**_<br>
> Parse error message.



### Event: breakpointResolved

Fired when breakpoint is resolved to an actual script and location.

### Results

_**breakpointId ( [BreakpointId](#class-breakpointid) )**_<br>
> Breakpoint unique identifier.

_**location ( [Location](#class-location) )**_<br>
> Actual breakpoint location.



### Event: paused

Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.

### Results

_**callFrames ( array of [CallFrame](#class-callframe) )**_<br>
> Call stack the virtual machine stopped on.

_**reason ( string enumerated ["XHR","DOM","EventListener","exception","assert","CSPViolation","DebuggerStatement","Breakpoint","PauseOnNextStatement","other"] )**_<br>
> Pause reason.

_**data ( optional object )**_<br>
> Object containing break-specific auxiliary properties.



### Event: resumed

Fired when the virtual machine resumed execution.


### Event: didSampleProbe

Fires when a new probe sample is collected.

### Results

_**sample ( [ProbeSample](#class-probesample) )**_<br>
> A collected probe sample.



### Event: playBreakpointActionSound

Fired when a "sound" breakpoint action is triggered on a breakpoint.

### Results

_**breakpointActionId ( [BreakpointActionIdentifier](#class-breakpointactionidentifier) )**_<br>
> Breakpoint action identifier.



## Types

### Class: BreakpointId

_Type: string_

Breakpoint identifier.


### Class: BreakpointActionIdentifier

_Type: integer_

Breakpoint action identifier.


### Class: ScriptId

_Type: string_

Unique script identifier.


### Class: CallFrameId

_Type: string_

Call frame identifier.


### Class: Location

_Type: object_

Location in the source code.

### Properties

_**scriptId ( [ScriptId](#class-scriptid) )**_<br>
> Script identifier as reported in the <code>Debugger.scriptParsed</code>.

_**lineNumber ( integer )**_<br>
> Line number in the script.

_**columnNumber ( optional integer )**_<br>
> Column number in the script.



### Class: BreakpointAction

_Type: object_

Action to perform when a breakpoint is triggered.

### Properties

_**type ( string enumerated ["log","evaluate","sound","probe"] )**_<br>
> Different kinds of breakpoint actions.

_**data ( optional string )**_<br>
> Data associated with this breakpoint type (e.g. for type "eval" this is the JavaScript string to evalulate).

_**id ( optional [BreakpointActionIdentifier](#class-breakpointactionidentifier) )**_<br>
> A frontend-assigned identifier for this breakpoint action.



### Class: BreakpointOptions

_Type: object_

Extra options that modify breakpoint behavior.

### Properties

_**condition ( optional string )**_<br>
> Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.

_**actions ( optional array of [BreakpointAction](#class-breakpointaction) )**_<br>
> Actions to perform automatically when the breakpoint is triggered.

_**autoContinue ( optional boolean )**_<br>
> Automatically continue after hitting this breakpoint and running actions.



### Class: FunctionDetails

_Type: object_

Information about the function.

### Properties

_**location ( [Location](#class-location) )**_<br>
> Location of the function.

_**name ( optional string )**_<br>
> Name of the function. Not present for anonymous functions.

_**displayName ( optional string )**_<br>
> Display name of the function(specified in 'displayName' property on the function object).

_**inferredName ( optional string )**_<br>
> Name of the function inferred from its initial assignment.

_**scopeChain ( optional array of [Scope](#class-scope) )**_<br>
> Scope chain for this closure.



### Class: CallFrame

_Type: object_

JavaScript call frame. Array of call frames form the call stack.

### Properties

_**callFrameId ( [CallFrameId](#class-callframeid) )**_<br>
> Call frame identifier. This identifier is only valid while the virtual machine is paused.

_**functionName ( string )**_<br>
> Name of the JavaScript function called on this call frame.

_**location ( [Location](#class-location) )**_<br>
> Location in the source code.

_**scopeChain ( array of [Scope](#class-scope) )**_<br>
> Scope chain for this call frame.

_**this ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> <code>this</code> object for this call frame.



### Class: Scope

_Type: object_

Scope description.

### Properties

_**type ( string enumerated ["global","local","with","closure","catch","functionName"] )**_<br>
> Scope type.

_**object ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties.



### Class: ProbeSample

_Type: object_

A sample collected by evaluating a probe breakpoint action.

### Properties

_**probeId ( [BreakpointActionIdentifier](#class-breakpointactionidentifier) )**_<br>
> Identifier of the probe breakpoint action that created the sample.

_**sampleId ( integer )**_<br>
> Unique identifier for this sample.

_**batchId ( integer )**_<br>
> A batch identifier which is the same for all samples taken at the same breakpoint hit.

_**timestamp ( number )**_<br>
> Timestamp of when the sample was taken.

_**payload ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Contents of the sample.



### Class: AssertPauseReason

_Type: object_

The pause reason auxiliary data when paused because of an assertion.

### Properties

_**message ( optional string )**_<br>
> The console.assert message string if provided.



### Class: BreakpointPauseReason

_Type: object_

The pause reason auxiliary data when paused because of hitting a breakpoint.

### Properties

_**breakpointId ( string )**_<br>
> The identifier of the breakpoint causing the pause.



### Class: CSPViolationPauseReason

_Type: object_

The pause reason auxiliary data when paused because of a Content Security Policy directive.

### Properties

_**directive ( string )**_<br>
> The CSP directive that blocked script execution.





