# Inspector

_Auto generated documentation for WebKit inspector

* Commands
 * [enable](#inspectorenablecallback)
 * [disable](#inspectordisablecallback)
 * [initialized](#inspectorinitializedcallback)
* Events
 * [evaluateForTestInFrontend](#event-evaluatefortestinfrontend)
 * [inspect](#event-inspect)
 * [detached](#event-detached)
 * [activateExtraDomains](#event-activateextradomains)
 * [targetCrashed](#event-targetcrashed)


## Commands

### Inspector.enable(callback)

Enables inspector domain notifications.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Inspector.disable(callback)

Disables inspector domain notifications.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Inspector.initialized(callback)

Sent by the frontend after all initialization messages have been sent.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: evaluateForTestInFrontend

### Results

_**script ( string )**_<br>


### Event: inspect

### Results

_**object ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
_**hints ( object )**_<br>


### Event: detached

Fired when remote debugging connection is about to be terminated. Contains detach reason.

### Results

_**reason ( string )**_<br>
> The reason why connection has been terminated.



### Event: activateExtraDomains

Fired when the backend has alternate domains that need to be activated.

### Results

_**domains ( array )**_<br>
> Domain names that need activation



### Event: targetCrashed

Fired when debugging target has crashed




