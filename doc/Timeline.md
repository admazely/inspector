# Timeline

_Auto generated documentation for WebKit inspector `1.0`_

Timeline provides its clients with instrumentation records that are generated during the page runtime. Timeline instrumentation can be started and stopped using corresponding commands. While timeline is started, it is generating timeline event records.


* Commands
 * [start](#timelinestartmaxcallstackdepth-callback)
 * [stop](#timelinestopcallback)
 * [setIncludeMemoryDetails](#timelinesetincludememorydetailsenabled-callback)
 * [supportsFrameInstrumentation](#timelinesupportsframeinstrumentationcallback)
 * [canMonitorMainThread](#timelinecanmonitormainthreadcallback)
* Events
 * [eventRecorded](#event-eventrecorded)
* Types
 * [TimelineEvent](#class-timelineevent)


## Commands

### Timeline.start([maxCallStackDepth], callback)

Starts capturing instrumentation events.

### Parameters

_**maxCallStackDepth ( optional integer )**_<br>
> Samples JavaScript stack traces up to <code>maxCallStackDepth</code>, defaults to 5.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Timeline.stop(callback)

Stops capturing instrumentation events.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Timeline.setIncludeMemoryDetails(enabled, callback)

Starts calculating various DOM statistics and sending them as part of timeline events.

### Parameters

_**enabled ( boolean )**_<br>
> True to start collecting DOM counters.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Timeline.supportsFrameInstrumentation(callback)

Tells whether timeline agent supports frame instrumentation.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if timeline supports frame instrumentation.



### Timeline.canMonitorMainThread(callback)

Tells whether timeline agent supports main thread CPU utilization instrumentation.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if timeline supports main thread CPU utilization instrumentation.



## Events

### Event: eventRecorded

Fired for every instrumentation event while timeline is started.

### Results

_**record ( [TimelineEvent](#class-timelineevent) )**_<br>
> Timeline event record data.



## Types

### Class: TimelineEvent

_Type: object_

Timeline record contains information about the recorded activity.

### Properties

_**type ( string )**_<br>
> Event type.

_**data ( object )**_<br>
> Event data.

_**children ( optional array of [TimelineEvent](#class-timelineevent) )**_<br>
> Nested records.





