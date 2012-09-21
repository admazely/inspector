# Inspector

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [enable](#inspectorenablecallback)
 * [disable](#inspectordisablecallback)
* Events
 * [evaluateForTestInFrontend](#event-evaluatefortestinfrontend)
 * [inspect](#event-inspect)


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


## Events

### Event: evaluateForTestInFrontend

### Results

_**testCallId ( integer )**_<br>
_**script ( string )**_<br>


### Event: inspect

### Results

_**object ( [Runtime.RemoteObject](Runtime.md#class-remoteobject))**_<br>
_**hints ( object )**_<br>




