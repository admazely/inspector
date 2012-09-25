# Runtime

_Auto generated documentation for WebKit inspector `1.0`_

Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released or are released along with the other objects in their object group.


* Commands
 * [evaluate](#runtimeevaluateexpression-objectgroup-includecommandlineapi-donotpauseonexceptionsandmuteconsole-runtimeexecutioncontextid-returnbyvalue-callback)
 * [callFunctionOn](#runtimecallfunctiononremoteobjectid-functiondeclaration-callargument-donotpauseonexceptionsandmuteconsole-returnbyvalue-callback)
 * [getProperties](#runtimegetpropertiesremoteobjectid-ownproperties-callback)
 * [releaseObject](#runtimereleaseobjectremoteobjectid-callback)
 * [releaseObjectGroup](#runtimereleaseobjectgroupobjectgroup-callback)
 * [run](#runtimeruncallback)
 * [setReportExecutionContextCreation](#runtimesetreportexecutioncontextcreationenabled-callback)
* Events
 * [executionContextCreated](#event-executioncontextcreated)
* Types
 * [RemoteObjectId](#class-remoteobjectid)
 * [RemoteObject](#class-remoteobject)
 * [ObjectPreview](#class-objectpreview)
 * [PropertyPreview](#class-propertypreview)
 * [PropertyDescriptor](#class-propertydescriptor)
 * [CallArgument](#class-callargument)
 * [ExecutionContextId](#class-executioncontextid)
 * [ExecutionContextDescription](#class-executioncontextdescription)


## Commands

### Runtime.evaluate(expression, [objectGroup], [includeCommandLineAPI], [doNotPauseOnExceptionsAndMuteConsole], [[Runtime.ExecutionContextId](Runtime.md#class-executioncontextid)], [returnByValue], callback)

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

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [RemoteObject](#class-remoteobject) )**_<br>
> Evaluation result.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the evaluation.



### Runtime.callFunctionOn([RemoteObjectId](#class-remoteobjectid), functionDeclaration, [[CallArgument](#class-callargument)], [doNotPauseOnExceptionsAndMuteConsole], [returnByValue], callback)

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

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [RemoteObject](#class-remoteobject) )**_<br>
> Call result.

_**wasThrown ( optional boolean )**_<br>
> True if the result was thrown during the evaluation.



### Runtime.getProperties([RemoteObjectId](#class-remoteobjectid), [ownProperties], callback)

Returns properties of a given object. Object group of the result is inherited from the target object.

### Parameters

_**objectId ( [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Identifier of the object to return properties for.

_**ownProperties ( optional boolean )**_<br>
> If true, returns properties belonging only to the element itself, not to its prototype chain.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( array of [PropertyDescriptor](#class-propertydescriptor) )**_<br>
> Object properties.



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


### Runtime.setReportExecutionContextCreation(enabled, callback)

Enables reporting about creation of execution contexts by means of `executionContextCreated` event. When the reporting gets enabled the event will be sent immediately for each existing execution context.

### Parameters

_**enabled ( boolean )**_<br>
> Reporting enabled state.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


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

_**type ( string enumerated ["object","function","undefined","string","number","boolean"] )**_<br>
> Object type.

_**subtype ( optional string enumerated ["array","null","node","regexp","date"] )**_<br>
> Object subtype hint. Specified for <code>object</code> type values only.

_**className ( optional string )**_<br>
> Object class (constructor) name. Specified for <code>object</code> type values only.

_**value ( optional any )**_<br>
> Remote object value (in case of primitive values or JSON values if it was requested).

_**description ( optional string )**_<br>
> String representation of the object.

_**objectId ( optional [RemoteObjectId](#class-remoteobjectid) )**_<br>
> Unique object identifier (for non-primitive values).

_**preview ( optional [ObjectPreview](#class-objectpreview) )**_<br>
> Preview containsing abbreviated property values.



### Class: ObjectPreview

_Type: object_

Object containing abbreviated remote object value.

### Properties

_**lossless ( boolean )**_<br>
> Determines whether preview is lossless (contains all information of the original object).

_**overflow ( boolean )**_<br>
> True iff some of the properties of the original did not fit.

_**properties ( array of [PropertyPreview](#class-propertypreview) )**_<br>
> List of the properties.



### Class: PropertyPreview

_Type: object_

### Properties

_**name ( string )**_<br>
> Property name.

_**type ( string enumerated ["object","function","undefined","string","number","boolean"] )**_<br>
> Object type.

_**value ( optional string )**_<br>
> User-friendly property value string.

_**subtype ( optional string enumerated ["array","null","node","regexp","date"] )**_<br>
> Object subtype hint. Specified for <code>object</code> type values only.



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





