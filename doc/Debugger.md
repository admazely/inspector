# Debugger

_Auto generated documentation for WebKit inspector `1.0`_
Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.


* Commands
 * [causesRecompilation](#debuggercausesrecompilationcallback)
 * [supportsSeparateScriptCompilationAndExecution](#debuggersupportsseparatescriptcompilationandexecutioncallback)
 * [enable](#debuggerenablecallback)
 * [disable](#debuggerdisablecallback)
 * [setBreakpointsActive](#debuggersetbreakpointsactiveactive-callback)
 * [setBreakpointByUrl](#debuggersetbreakpointbyurllinenumber-url-urlregex-columnnumber-condition-callback)
 * [setBreakpoint](#debuggersetbreakpointlocation-condition-callback)
 * [removeBreakpoint](#debuggerremovebreakpointbreakpointid-callback)
 * [continueToLocation](#debuggercontinuetolocationlocation-callback)
 * [stepOver](#debuggerstepovercallback)
 * [stepInto](#debuggerstepintocallback)
 * [stepOut](#debuggerstepoutcallback)
 * [pause](#debuggerpausecallback)
 * [resume](#debuggerresumecallback)
 * [searchInContent](#debuggersearchincontentscriptid-query-casesensitive-isregex-callback)
 * [canSetScriptSource](#debuggercansetscriptsourcecallback)
 * [setScriptSource](#debuggersetscriptsourcescriptid-scriptsource-preview-callback)
 * [restartFrame](#debuggerrestartframecallframeid-callback)
 * [getScriptSource](#debuggergetscriptsourcescriptid-callback)
 * [getFunctionDetails](#debuggergetfunctiondetailsruntimeremoteobjectid-callback)
 * [setPauseOnExceptions](#debuggersetpauseonexceptionsstate-callback)
 * [evaluateOnCallFrame](#debuggerevaluateoncallframecallframeid-expression-objectgroup-includecommandlineapi-donotpauseonexceptionsandmuteconsole-returnbyvalue-callback)
 * [compileScript](#debuggercompilescriptexpression-sourceurl-callback)
 * [runScript](#debuggerrunscriptscriptid-runtimeexecutioncontextid-objectgroup-donotpauseonexceptionsandmuteconsole-callback)
 * [setOverlayMessage](#debuggersetoverlaymessagemessage-callback)
* Events
 * [globalObjectCleared](#event-globalobjectcleared)
 * [scriptParsed](#event-scriptparsed)
 * [scriptFailedToParse](#event-scriptfailedtoparse)
 * [breakpointResolved](#event-breakpointresolved)
 * [paused](#event-paused)
 * [resumed](#event-resumed)
* Types
 * [BreakpointId](#class-breakpointid)
 * [ScriptId](#class-scriptid)
 * [CallFrameId](#class-callframeid)
 * [Location](#class-location)
 * [FunctionDetails](#class-functiondetails)
 * [CallFrame](#class-callframe)
 * [Scope](#class-scope)


## Commands

### Debugger.causesRecompilation(callback)

Tells whether enabling debugger causes scripts recompilation.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if enabling debugger causes scripts recompilation.



### Debugger.supportsSeparateScriptCompilationAndExecution(callback)

Tells whether debugger supports separate script compilation and execution.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if debugger supports separate script compilation and execution.



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


### Debugger.setBreakpointByUrl(lineNumber, [url], [urlRegex], [columnNumber], [condition], callback)

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

_**condition ( optional string )**_<br>
> Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**breakpointId ( [BreakpointId](#class-breakpointid))**_<br>
> Id of the created breakpoint for further reference.

_**locations ( array of [Location](#class-location))**_<br>
> List of the locations this breakpoint resolved into upon addition.



### Debugger.setBreakpoint([Location](#class-location), [condition], callback)

Sets JavaScript breakpoint at a given location.

### Parameters

_**location ( [Location](#class-location))**_<br>
> Location to set breakpoint in.

_**condition ( optional string )**_<br>
> Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**breakpointId ( [BreakpointId](#class-breakpointid))**_<br>
> Id of the created breakpoint for further reference.

_**actualLocation ( [Location](#class-location))**_<br>
> Location this breakpoint resolved into.



### Debugger.removeBreakpoint([BreakpointId](#class-breakpointid), callback)

Removes JavaScript breakpoint.

### Parameters

_**breakpointId ( [BreakpointId](#class-breakpointid))**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.continueToLocation([Location](#class-location), callback)

Continues execution until specific location is reached.

### Parameters

_**location ( [Location](#class-location))**_<br>
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

_**scriptId ( [ScriptId](#class-scriptid))**_<br>
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
_**result ( array of [Page.SearchMatch](Page.md#class-searchmatch))**_<br>
> List of search matches.



### Debugger.canSetScriptSource(callback)

Tells whether `setScriptSource` is supported.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if <code>setScriptSource</code> is supported.



### Debugger.setScriptSource([ScriptId](#class-scriptid), scriptSource, [preview], callback)

Edits JavaScript source live.

### Parameters

_**scriptId ( [ScriptId](#class-scriptid))**_<br>
> Id of the script to edit.

_**scriptSource ( string )**_<br>
> New content of the script.

_**preview ( optional boolean )**_<br>
>  If true the change will not actually be applied. Preview mode may be used to get result description without actually modifying the code.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**callFrames ( optional array of [CallFrame](#class-callframe))**_<br>
> New stack trace in case editing has happened while VM was stopped.

_**result ( optional object )**_<br>
> VM-specific description of the changes applied.



### Debugger.restartFrame([CallFrameId](#class-callframeid), callback)

Restarts particular call frame from the beginning.

### Parameters

_**callFrameId ( [CallFrameId](#class-callframeid))**_<br>
> Call frame identifier to evaluate on.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**callFrames ( array of [CallFrame](#class-callframe))**_<br>
> New stack trace.

_**result ( object )**_<br>
> VM-specific description.



### Debugger.getScriptSource([ScriptId](#class-scriptid), callback)

Returns source for the script with given id.

### Parameters

_**scriptId ( [ScriptId](#class-scriptid))**_<br>
> Id of the script to get source for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**scriptSource ( string )**_<br>
> Script source.



### Debugger.getFunctionDetails([Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid), callback)

Returns detailed informtation on given function.

### Parameters

_**functionId ( [Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid))**_<br>
> Id of the function to get location for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**details ( [FunctionDetails](#class-functiondetails))**_<br>
> Information about the function.



### Debugger.setPauseOnExceptions(state, callback)

Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is `none`.

### Parameters

_**state ( string )**_<br>
> Pause on exceptions mode.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Debugger.evaluateOnCallFrame([CallFrameId](#class-callframeid), expression, [objectGroup], [includeCommandLineAPI], [doNotPauseOnExceptionsAndMuteConsole], [returnByValue], callback)

Evaluates expression on a given call frame.

### Parameters

_**callFrameId ( [CallFrameId](#class-callframeid))**_<br>
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

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [Runtime.RemoteObject](Runtime.md#class-remoteobject))**_<br>
> Object wrapper for the evaluation result.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the evaluation.



### Debugger.compileScript(expression, sourceURL, callback)

Compiles expression.

### Parameters

_**expression ( string )**_<br>
> Expression to compile.

_**sourceURL ( string )**_<br>
> Source url to be set for the script.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**scriptId ( optional [ScriptId](#class-scriptid))**_<br>
> Id of the script.

_**syntaxErrorMessage ( optional string )**_<br>
> Syntax error message if compilation failed.



### Debugger.runScript([ScriptId](#class-scriptid), [[Runtime.ExecutionContextId](Runtime.md#class-executioncontextid)], [objectGroup], [doNotPauseOnExceptionsAndMuteConsole], callback)

Runs script with given id in a given context.

### Parameters

_**scriptId ( [ScriptId](#class-scriptid))**_<br>
> Id of the script to run.

_**contextId ( optional [Runtime.ExecutionContextId](Runtime.md#class-executioncontextid))**_<br>
> Specifies in which isolated context to perform script run. Each content script lives in an isolated context and this parameter may be used to specify one of those contexts. If the parameter is omitted or 0 the evaluation will be performed in the context of the inspected page.

_**objectGroup ( optional string )**_<br>
> Symbolic group name that can be used to release multiple objects.

_**doNotPauseOnExceptionsAndMuteConsole ( optional boolean )**_<br>
> Specifies whether script run should stop on exceptions and mute console. Overrides setPauseOnException state.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [Runtime.RemoteObject](Runtime.md#class-remoteobject))**_<br>
> Run result.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the script run.



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


### Event: scriptParsed

### Results

_**scriptId ( [ScriptId](#class-scriptid))**_<br>
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



### Event: scriptFailedToParse

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

### Results

_**breakpointId ( [BreakpointId](#class-breakpointid))**_<br>
> Breakpoint unique identifier.

_**location ( [Location](#class-location))**_<br>
> Actual breakpoint location.



### Event: paused

### Results

_**callFrames ( array of [CallFrame](#class-callframe))**_<br>
> Call stack the virtual machine stopped on.

_**reason ( string )**_<br>
> Pause reason.

_**data ( optional object )**_<br>
> Object containing break-specific auxiliary properties.



### Event: resumed


## Types

### Class: BreakpointId

_Type: string_


### Class: ScriptId

_Type: string_


### Class: CallFrameId

_Type: string_


### Class: Location

_Type: object_

### Properties

_**scriptId ( [ScriptId](#class-scriptid))**_<br>
> Script identifier as reported in the <code>Debugger.scriptParsed</code>.

_**lineNumber ( integer )**_<br>
> Line number in the script.

_**columnNumber ( optional integer )**_<br>
> Column number in the script.



### Class: FunctionDetails

_Type: object_

### Properties

_**location ( [Location](#class-location))**_<br>
> Location of the function.

_**name ( optional string )**_<br>
> Name of the function. Not present for anonymous functions.

_**displayName ( optional string )**_<br>
> Display name of the function(specified in 'displayName' property on the function object).

_**inferredName ( optional string )**_<br>
> Name of the function inferred from its initial assignment.

_**scopeChain ( optional array of [Scope](#class-scope))**_<br>
> Scope chain for this closure.



### Class: CallFrame

_Type: object_

### Properties

_**callFrameId ( [CallFrameId](#class-callframeid))**_<br>
> Call frame identifier. This identifier is only valid while the virtual machine is paused.

_**functionName ( string )**_<br>
> Name of the JavaScript function called on this call frame.

_**location ( [Location](#class-location))**_<br>
> Location in the source code.

_**scopeChain ( array of [Scope](#class-scope))**_<br>
> Scope chain for this call frame.

_**this ( [Runtime.RemoteObject](Runtime.md#class-remoteobject))**_<br>
> <code>this</code> object for this call frame.



### Class: Scope

_Type: object_

### Properties

_**type ( string )**_<br>
> Scope type.

_**object ( [Runtime.RemoteObject](Runtime.md#class-remoteobject))**_<br>
> Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties.





