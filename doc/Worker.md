# Worker

_Auto generated documentation for WebKit inspector

* Commands
 * [enable](#workerenablecallback)
 * [disable](#workerdisablecallback)
 * [sendMessageToWorker](#workersendmessagetoworkerworkerid-message-callback)
 * [canInspectWorkers](#workercaninspectworkerscallback)
 * [connectToWorker](#workerconnecttoworkerworkerid-callback)
 * [disconnectFromWorker](#workerdisconnectfromworkerworkerid-callback)
 * [setAutoconnectToWorkers](#workersetautoconnecttoworkersvalue-callback)
* Events
 * [workerCreated](#event-workercreated)
 * [workerTerminated](#event-workerterminated)
 * [dispatchMessageFromWorker](#event-dispatchmessagefromworker)
 * [disconnectedFromWorker](#event-disconnectedfromworker)


## Commands

### Worker.enable(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Worker.disable(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Worker.sendMessageToWorker(workerId, message, callback)

### Parameters

_**workerId ( integer )**_<br>
_**message ( object )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Worker.canInspectWorkers(callback)

Tells whether browser supports workers inspection.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if browser has workers support.



### Worker.connectToWorker(workerId, callback)

### Parameters

_**workerId ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Worker.disconnectFromWorker(workerId, callback)

### Parameters

_**workerId ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Worker.setAutoconnectToWorkers(value, callback)

### Parameters

_**value ( boolean )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: workerCreated

### Results

_**workerId ( integer )**_<br>
_**url ( string )**_<br>
_**inspectorConnected ( boolean )**_<br>


### Event: workerTerminated

### Results

_**workerId ( integer )**_<br>


### Event: dispatchMessageFromWorker

### Results

_**workerId ( integer )**_<br>
_**message ( object )**_<br>


### Event: disconnectedFromWorker




