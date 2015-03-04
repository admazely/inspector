# Console

_Auto generated documentation for WebKit inspector

Console domain defines methods and events for interaction with the JavaScript console. Console collects messages created by means of the <a href='http://getfirebug.com/wiki/index.php/Console_API'>JavaScript Console API</a>. One needs to enable this domain using <code>enable</code> command in order to start receiving the console messages. Browser collects messages issued while console domain is not enabled as well and reports them using <code>messageAdded</code> notification upon enabling.


* Commands
 * [enable](#consoleenablecallback)
 * [disable](#consoledisablecallback)
 * [clearMessages](#consoleclearmessagescallback)
 * [setMonitoringXHREnabled](#consolesetmonitoringxhrenabledenabled-callback)
 * [addInspectedNode](#consoleaddinspectednodedomnodeid-callback)
* Events
 * [messageAdded](#event-messageadded)
 * [messageRepeatCountUpdated](#event-messagerepeatcountupdated)
 * [messagesCleared](#event-messagescleared)
* Types
 * [ConsoleMessage](#class-consolemessage)
 * [CallFrame](#class-callframe)
 * [StackTrace](#class-stacktrace)


## Commands

### Console.enable(callback)

Enables console domain, sends the messages collected so far to the client by means of the `messageAdded` notification.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Console.disable(callback)

Disables console domain, prevents further console messages from being reported to the client.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Console.clearMessages(callback)

Clears console messages collected in the browser.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Console.setMonitoringXHREnabled(enabled, callback)

Toggles monitoring of XMLHttpRequest. If `true`, console will receive messages upon each XHR issued.

### Parameters

_**enabled ( boolean )**_<br>
> Monitoring enabled state.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Console.addInspectedNode([DOM.NodeId](DOM.md#class-nodeid), callback)

Enables console to refer to the node with given id via $x (see Command Line API for more details $x functions).

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> DOM node id to be accessible by means of $x command line API.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: messageAdded

Issued when new console message is added.

### Results

_**message ( [ConsoleMessage](#class-consolemessage) )**_<br>
> Console message that has been added.



### Event: messageRepeatCountUpdated

Issued when subsequent message(s) are equal to the previous one(s).

### Results

_**count ( integer )**_<br>
> New repeat count value.



### Event: messagesCleared

Issued when console is cleared. This happens either upon `clearMessages` command or after page navigation.


## Types

### Class: ConsoleMessage

_Type: object_

Console message.

### Properties

_**source ( string enumerated ["xml","javascript","network","console-api","storage","appcache","rendering","css","security","other"] )**_<br>
> Message source.

_**level ( string enumerated ["log","warning","error","debug"] )**_<br>
> Message severity.

_**text ( string )**_<br>
> Message text.

_**type ( optional string enumerated ["log","dir","dirxml","table","trace","clear","startGroup","startGroupCollapsed","endGroup","assert","timing","profile","profileEnd"] )**_<br>
> Console message type.

_**url ( optional string )**_<br>
> URL of the message origin.

_**line ( optional integer )**_<br>
> Line number in the resource that generated this message.

_**column ( optional integer )**_<br>
> Column number on the line in the resource that generated this message.

_**repeatCount ( optional integer )**_<br>
> Repeat count for repeated messages.

_**parameters ( optional array of [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Message parameters in case of the formatted message.

_**stackTrace ( optional [StackTrace](#class-stacktrace) )**_<br>
> JavaScript stack trace for assertions and error messages.

_**networkRequestId ( optional [Network.RequestId](Network.md#class-requestid) )**_<br>
> Identifier of the network request associated with this message.



### Class: CallFrame

_Type: object_

Stack entry for console errors and assertions.

### Properties

_**functionName ( string )**_<br>
> JavaScript function name.

_**url ( string )**_<br>
> JavaScript script name or url.

_**lineNumber ( integer )**_<br>
> JavaScript script line number.

_**columnNumber ( integer )**_<br>
> JavaScript script column number.



### Class: StackTrace

_Type: array_

Call frames for assertions or error messages.




