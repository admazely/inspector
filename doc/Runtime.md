# Runtime

_Auto generated documentation for WebKit inspector

Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released or are released along with the other objects in their object group.


* Commands
 * [parse](#runtimeparsesource-callback)
 * [evaluate](#runtimeevaluateexpression-objectgroup-includecommandlineapi-donotpauseonexceptionsandmuteconsole-runtimeexecutioncontextid-returnbyvalue-generatepreview-saveresult-callback)
 * [callFunctionOn](#runtimecallfunctiononremoteobjectid-functiondeclaration-callargument-donotpauseonexceptionsandmuteconsole-returnbyvalue-generatepreview-callback)
 * [getProperties](#runtimegetpropertiesremoteobjectid-ownproperties-generatepreview-callback)
 * [getDisplayableProperties](#runtimegetdisplayablepropertiesremoteobjectid-generatepreview-callback)
 * [getCollectionEntries](#runtimegetcollectionentriesruntimeremoteobjectid-objectgroup-startindex-numbertofetch-callback)
 * [saveResult](#runtimesaveresultcallargument-executioncontextid-callback)
 * [releaseObject](#runtimereleaseobjectremoteobjectid-callback)
 * [releaseObjectGroup](#runtimereleaseobjectgroupobjectgroup-callback)
 * [run](#runtimeruncallback)
 * [enable](#runtimeenablecallback)
 * [disable](#runtimedisablecallback)
 * [getRuntimeTypesForVariablesAtOffsets](#runtimegetruntimetypesforvariablesatoffsetstypelocation-callback)
 * [enableTypeProfiler](#runtimeenabletypeprofilercallback)
 * [disableTypeProfiler](#runtimedisabletypeprofilercallback)
 * [getBasicBlocks](#runtimegetbasicblockssourceid-callback)
* Events
 * [executionContextCreated](#event-executioncontextcreated)
* Types
 * [RemoteObjectId](#class-remoteobjectid)
 * [RemoteObject](#class-remoteobject)
 * [ObjectPreview](#class-objectpreview)
 * [PropertyPreview](#class-propertypreview)
 * [EntryPreview](#class-entrypreview)
 * [CollectionEntry](#class-collectionentry)
 * [PropertyDescriptor](#class-propertydescriptor)
 * [InternalPropertyDescriptor](#class-internalpropertydescriptor)
 * [CallArgument](#class-callargument)
 * [ExecutionContextId](#class-executioncontextid)
 * [ExecutionContextDescription](#class-executioncontextdescription)
 * [SyntaxErrorType](#class-syntaxerrortype)
 * [ErrorRange](#class-errorrange)
 * [StructureDescription](#class-structuredescription)
 * [TypeSet](#class-typeset)
 * [TypeDescription](#class-typedescription)
 * [TypeLocation](#class-typelocation)
 * [BasicBlock](#class-basicblock)


## Commands

### Runtime.parse(source, callback)

Parses JavaScript source code for errors.

### Parameters

_**source ( string )**_<br>
> Source code to parse.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [SyntaxErrorType](#class-syntaxerrortype) )**_<br>
> Parse result.

_**message ( optional string )**_<br>
> Parse error message.

_**range ( optional [ErrorRange](#class-errorrange) )**_<br>
> Range in the source where the error occurred.



### Runtime.evaluate(expression, [objectGroup], [includeCommandLineAPI], [doNotPauseOnExceptionsAndMuteConsole], [[Runtime.ExecutionContextId](Runtime.md#class-executioncontextid)], [returnByValue], [generatePreview], [saveResult], callback)

Evaluates expression on global object.

### Parameters

_**expression ( string )**_<br>
> Expression to evaluate.

_**objectGroup ( optional string )**_<br>
> Symbolic group name that can be used to release multiple objects.

_**includeCommandLineAPI ( optional boolean )**_<br>
> Determines whether Command Line API should be available during the evaluation.

_**doNotPauseOnExceptionsAndMuteConsole ( optional boolean )**_<br>
> Specifies whether evaluation should stop on exceptions and mute console. Overrides setPauseOnException state.

_**contextId ( optional [Runtime.ExecutionContextId](Runtime.md#class-executioncontextid) )**_<br>
> Specifies in which isolated context to perform evaluation. Each content script lives in an isolated context and this parameter may be used to specify one of those contexts. If the parameter is omitted or 0 the evaluation will be performed in the context of the inspected page.

_**returnByValue ( optional boolean )**_<br>
> Whether the result is expected to be a JSON object that should be sent by value.

_**generatePreview ( optional boolean )**_<br>
> Whether preview should be generated for the result.

_**saveResult ( optional boolean )**_<br>
> Whether the resulting value should be considered for saving in the $n history.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [RemoteObject](#class-remoteobject) )**_<br>
> Evaluation result.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the evaluation.

_**savedResultIndex ( optional integer )**_<br>
> If the result was saved, this is the $n index that can be used to access the value.



### Runtime.callFunctionOn([RemoteObjectId](#class-remoteobjectid), functionDeclaration, [[CallArgument](#class-callargument)], [doNotPauseOnExceptionsAndMuteConsole], [returnByValue], [generatePreview], callback)

Calls function with given declaration on the given object. Object group of the result is inherited from the target object.

### Parameters

_**objectId ( [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Identifier of the object to call function on.

_**functionDeclaration ( string )**_<br>
> Declaration of the function to call.

_**arguments ( optional array of [CallArgument](#class-callargument) )**_<br>
> Call arguments. All call arguments must belong to the same JavaScript world as the target object.

_**doNotPauseOnExceptionsAndMuteConsole ( optional boolean )**_<br>
> Specifies whether function call should stop on exceptions and mute console. Overrides setPauseOnException state.

_**returnByValue ( optional boolean )**_<br>
> Whether the result is expected to be a JSON object which should be sent by value.

_**generatePreview ( optional boolean )**_<br>
> Whether preview should be generated for the result.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [RemoteObject](#class-remoteobject) )**_<br>
> Call result.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the evaluation.



### Runtime.getProperties([RemoteObjectId](#class-remoteobjectid), [ownProperties], [generatePreview], callback)

Returns properties of a given object. Object group of the result is inherited from the target object.

### Parameters

_**objectId ( [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Identifier of the object to return properties for.

_**ownProperties ( optional boolean )**_<br>
> If true, returns properties belonging only to the object itself, not to its prototype chain.

_**generatePreview ( optional boolean )**_<br>
> Whether preview should be generated for property values.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( array of [PropertyDescriptor](#class-propertydescriptor) )**_<br>
> Object properties.

_**internalProperties ( optional array of [InternalPropertyDescriptor](#class-internalpropertydescriptor) )**_<br>
> Internal object properties.



### Runtime.getDisplayableProperties([RemoteObjectId](#class-remoteobjectid), [generatePreview], callback)

Returns displayable properties of a given object. Object group of the result is inherited from the target object. Displayable properties are own properties, internal properties, and native getters in the prototype chain (assumed to be bindings and treated like own properties for the frontend).

### Parameters

_**objectId ( [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Identifier of the object to return properties for.

_**generatePreview ( optional boolean )**_<br>
> Whether preview should be generated for property values.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**properties ( array of [PropertyDescriptor](#class-propertydescriptor) )**_<br>
> Object properties.

_**internalProperties ( optional array of [InternalPropertyDescriptor](#class-internalpropertydescriptor) )**_<br>
> Internal object properties.



### Runtime.getCollectionEntries([Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid), [objectGroup], [startIndex], [numberToFetch], callback)

Returns entries of given Map / Set collection.

### Parameters

_**objectId ( [Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid) )**_<br>
> Id of the collection to get entries for.

_**objectGroup ( optional string )**_<br>
> Symbolic group name that can be used to release multiple. If not provided, it will be the same objectGroup as the RemoteObject determined from <code>objectId</code>. This is useful for WeakMap to release the collection entries.

_**startIndex ( optional integer )**_<br>
> If provided skip to this index before collecting values. Otherwise, 0.

_**numberToFetch ( optional integer )**_<br>
> If provided only return <code>numberToFetch</code> values. Otherwise, return values all the way to the end.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**entries ( array of [CollectionEntry](#class-collectionentry) )**_<br>
> Array of collection entries.



### Runtime.saveResult([CallArgument](#class-callargument), [[ExecutionContextId](#class-executioncontextid)], callback)

Assign a saved result index to this value.

### Parameters

_**value ( [CallArgument](#class-callargument) )**_<br>
> Id or value of the object to save.

_**contextId ( optional [ExecutionContextId](#class-executioncontextid) )**_<br>
> Unique id of the execution context. To specify in which execution context script evaluation should be performed. If not provided, determine from the CallArgument's objectId.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**savedResultIndex ( optional integer )**_<br>
> If the value was saved, this is the $n index that can be used to access the value.



### Runtime.releaseObject([RemoteObjectId](#class-remoteobjectid), callback)

Releases remote object with given id.

### Parameters

_**objectId ( [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Identifier of the object to release.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Runtime.releaseObjectGroup(objectGroup, callback)

Releases all remote objects that belong to a given group.

### Parameters

_**objectGroup ( string )**_<br>
> Symbolic object group name.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Runtime.run(callback)

Tells inspected instance(worker or page) that it can run in case it was started paused.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Runtime.enable(callback)

Enables reporting of execution contexts creation by means of `executionContextCreated` event. When the reporting gets enabled the event will be sent immediately for each existing execution context.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Runtime.disable(callback)

Disables reporting of execution contexts creation.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Runtime.getRuntimeTypesForVariablesAtOffsets([TypeLocation](#class-typelocation), callback)

Returns detailed informtation on given function.

### Parameters

_**locations ( array of [TypeLocation](#class-typelocation) )**_<br>
> An array of type locations we're requesting information for. Results are expected in the same order they're sent in.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**types ( array of [TypeDescription](#class-typedescription) )**_<br>


### Runtime.enableTypeProfiler(callback)

Enables type profiling on the VM.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Runtime.disableTypeProfiler(callback)

Disables type profiling on the VM.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Runtime.getBasicBlocks(sourceID, callback)

Returns a list of basic blocks for the given sourceID with information about their text ranges and whether or not they have executed.

### Parameters

_**sourceID ( string )**_<br>
> Indicates which sourceID information is requested for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**basicBlocks ( array of [BasicBlock](#class-basicblock) )**_<br>


## Events

### Event: executionContextCreated

Issued when new execution context is created.

### Results

_**context ( [ExecutionContextDescription](#class-executioncontextdescription) )**_<br>
> A newly created execution contex.



## Types

### Class: RemoteObjectId

_Type: string_

Unique object identifier.


### Class: RemoteObject

_Type: object_

Mirror object referencing original JavaScript object.

### Properties

_**type ( string enumerated ["object","function","undefined","string","number","boolean","symbol"] )**_<br>
> Object type.

_**subtype ( optional string enumerated ["array","null","node","regexp","date","error","map","set","weakmap","iterator"] )**_<br>
> Object subtype hint. Specified for <code>object</code> type values only.

_**className ( optional string )**_<br>
> Object class (constructor) name. Specified for <code>object</code> type values only.

_**value ( optional any )**_<br>
> Remote object value (in case of primitive values or JSON values if it was requested).

_**description ( optional string )**_<br>
> String representation of the object.

_**objectId ( optional [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Unique object identifier (for non-primitive values).

_**size ( optional integer )**_<br>
> Size of the array/collection. Specified for array/map/set/weakmap object type values only.

_**preview ( optional [ObjectPreview](#class-objectpreview) )**_<br>
> Preview containing abbreviated property values. Specified for <code>object</code> type values only.



### Class: ObjectPreview

_Type: object_

Object containing abbreviated remote object value.

### Properties

_**type ( string enumerated ["object","function","undefined","string","number","boolean","symbol"] )**_<br>
> Object type.

_**subtype ( optional string enumerated ["array","null","node","regexp","date","error","map","set","weakmap","iterator"] )**_<br>
> Object subtype hint. Specified for <code>object</code> type values only.

_**description ( optional string )**_<br>
> String representation of the object.

_**lossless ( boolean )**_<br>
> Determines whether preview is lossless (contains all information of the original object).

_**overflow ( optional boolean )**_<br>
> True iff some of the properties of the original did not fit.

_**properties ( optional array of [PropertyPreview](#class-propertypreview) )**_<br>
> List of the properties.

_**entries ( optional array of [EntryPreview](#class-entrypreview) )**_<br>
> List of the entries. Specified for <code>map</code> and <code>set</code> subtype values only.

_**size ( optional integer )**_<br>
> Size of the array/collection. Specified for array/map/set/weakmap object type values only.



### Class: PropertyPreview

_Type: object_

### Properties

_**name ( string )**_<br>
> Property name.

_**type ( string enumerated ["object","function","undefined","string","number","boolean","symbol","accessor"] )**_<br>
> Object type.

_**subtype ( optional string enumerated ["array","null","node","regexp","date","error","map","set","weakmap","iterator"] )**_<br>
> Object subtype hint. Specified for <code>object</code> type values only.

_**value ( optional string )**_<br>
> User-friendly property value string.

_**valuePreview ( optional [ObjectPreview](#class-objectpreview) )**_<br>
> Nested value preview.

_**internal ( optional boolean )**_<br>
> True if this is an internal property.



### Class: EntryPreview

_Type: object_

### Properties

_**key ( optional [ObjectPreview](#class-objectpreview) )**_<br>
> Entry key. Specified for map-like collection entries.

_**value ( [ObjectPreview](#class-objectpreview) )**_<br>
> Entry value.



### Class: CollectionEntry

_Type: object_

### Properties

_**key ( optional [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Entry key of a map-like collection, otherwise not provided.

_**value ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Entry value.



### Class: PropertyDescriptor

_Type: object_

Object property descriptor.

### Properties

_**name ( string )**_<br>
> Property name.

_**value ( optional [RemoteObject](#class-remoteobject) )**_<br>
> The value associated with the property.

_**writable ( optional boolean )**_<br>
> True if the value associated with the property may be changed (data descriptors only).

_**get ( optional [RemoteObject](#class-remoteobject) )**_<br>
> A function which serves as a getter for the property, or <code>undefined</code> if there is no getter (accessor descriptors only).

_**set ( optional [RemoteObject](#class-remoteobject) )**_<br>
> A function which serves as a setter for the property, or <code>undefined</code> if there is no setter (accessor descriptors only).

_**configurable ( boolean )**_<br>
> True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

_**enumerable ( boolean )**_<br>
> True if this property shows up during enumeration of the properties on the corresponding object.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the evaluation.

_**isOwn ( optional boolean )**_<br>
> True if the property is owned for the object.

_**nativeGetter ( optional boolean )**_<br>
> True if the property value came from a native getter.



### Class: InternalPropertyDescriptor

_Type: object_

Object internal property descriptor. This property isn't normally visible in JavaScript code.

### Properties

_**name ( string )**_<br>
> Conventional property name.

_**value ( optional [RemoteObject](#class-remoteobject) )**_<br>
> The value associated with the property.



### Class: CallArgument

_Type: object_

Represents function call argument. Either remote object id `objectId` or primitive `value` or neither of (for undefined) them should be specified.

### Properties

_**value ( optional any )**_<br>
> Primitive value.

_**objectId ( optional [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Remote object handle.



### Class: ExecutionContextId

_Type: integer_

Id of an execution context.


### Class: ExecutionContextDescription

_Type: object_

Description of an isolated world.

### Properties

_**id ( [ExecutionContextId](#class-executioncontextid) )**_<br>
> Unique id of the execution context. It can be used to specify in which execution context script evaluation should be performed.

_**isPageContext ( boolean )**_<br>
> True if this is a context where inpspected web page scripts run. False if it is a content script isolated context.

_**name ( string )**_<br>
> Human readable name describing given context.

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Id of the owning frame.



### Class: SyntaxErrorType

_Type: string_

Syntax error type: "none" for no error, "irrecoverable" for unrecoverable errors, "unterminated-literal" for when there is an unterminated literal, "recoverable" for when the expression is unfinished but valid so far.


### Class: ErrorRange

_Type: object_

Range of an error in source code.

### Properties

_**startOffset ( integer )**_<br>
> Start offset of range (inclusive).

_**endOffset ( integer )**_<br>
> End offset of range (exclusive).



### Class: StructureDescription

_Type: object_

### Properties

_**fields ( optional array )**_<br>
> Array of strings, where the strings represent object properties.

_**optionalFields ( optional array )**_<br>
> Array of strings, where the strings represent optional object properties.

_**constructorName ( optional string )**_<br>
> Name of the constructor.

_**prototypeStructure ( optional [StructureDescription](#class-structuredescription) )**_<br>
> Pointer to the StructureRepresentation of the protoype if one exists.

_**isImprecise ( optional boolean )**_<br>
> If true, it indicates that the fields in this StructureDescription may be inaccurate. I.e, there might have been fields that have been deleted before it was profiled or it has fields we haven't profiled.



### Class: TypeSet

_Type: object_

### Properties

_**isFunction ( boolean )**_<br>
> Indicates if this type description has been type Function.

_**isUndefined ( boolean )**_<br>
> Indicates if this type description has been type Undefined.

_**isNull ( boolean )**_<br>
> Indicates if this type description has been type Null.

_**isBoolean ( boolean )**_<br>
> Indicates if this type description has been type Boolean.

_**isInteger ( boolean )**_<br>
> Indicates if this type description has been type Integer.

_**isNumber ( boolean )**_<br>
> Indicates if this type description has been type Number.

_**isString ( boolean )**_<br>
> Indicates if this type description has been type String.

_**isObject ( boolean )**_<br>
> Indicates if this type description has been type Object.



### Class: TypeDescription

_Type: object_

Container for type information that has been gathered.

### Properties

_**isValid ( boolean )**_<br>
> If true, we were able to correlate the offset successfuly with a program location. If false, the offset may be bogus or the offset may be from a CodeBlock that hasn't executed.

_**leastCommonAncestor ( optional string )**_<br>
> Least common ancestor of all Constructors if the TypeDescription has seen any structures. This string is the display name of the shared constructor function.

_**typeSet ( optional [TypeSet](#class-typeset) )**_<br>
> Set of booleans for determining the aggregate type of this type description.

_**structures ( optional array of [StructureDescription](#class-structuredescription) )**_<br>
> Array of descriptions for all structures seen for this variable.

_**isTruncated ( optional boolean )**_<br>
> If true, this indicates that no more structures are being profiled because some maximum threshold has been reached and profiling has stopped because of memory pressure.



### Class: TypeLocation

_Type: object_

Describes the location of an expression we want type information for.

### Properties

_**typeInformationDescriptor ( integer )**_<br>
> What kind of type information do we want (normal, function return values, 'this' statement).

_**sourceID ( string )**_<br>
> sourceID uniquely identifying a script

_**divot ( integer )**_<br>
> character offset for assignment range



### Class: BasicBlock

_Type: object_

From Wikipedia: a basic block is a portion of the code within a program with only one entry point and only one exit point. This type gives the location of a basic block and if that basic block has executed.

### Properties

_**startOffset ( integer )**_<br>
> Start offset of the basic block.

_**endOffset ( integer )**_<br>
> End offset of the basic block.

_**hasExecuted ( boolean )**_<br>
> Indicates if the basic block has executed before.





