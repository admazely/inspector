# Timeline

_Auto generated documentation for WebKit inspector

Timeline provides its clients with instrumentation records that are generated during the page runtime. Timeline instrumentation can be started and stopped using corresponding commands. While timeline is started, it is generating timeline event records.


* Commands
 * [start](#timelinestartmaxcallstackdepth-includedomcounters-callback)
 * [stop](#timelinestopcallback)
 * [supportsFrameInstrumentation](#timelinesupportsframeinstrumentationcallback)
 * [canMonitorMainThread](#timelinecanmonitormainthreadcallback)
* Events
 * [eventRecorded](#event-eventrecorded)
* Types
 * [DOMCounters](#class-domcounters)
 * [EventType](#class-eventtype)
 * [TimelineEvent](#class-timelineevent)


## Commands

### Timeline.start([maxCallStackDepth], [includeDomCounters], callback)

Starts capturing instrumentation events.

### Parameters

_**maxCallStackDepth ( optional integer )**_<br>
> Samples JavaScript stack traces up to <code>maxCallStackDepth</code>, defaults to 5.

_**includeDomCounters ( optional boolean )**_<br>
> Whether DOM counters data should be included into timeline events.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Timeline.stop(callback)

Stops capturing instrumentation events.

### Parameters

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

### Class: DOMCounters

_Type: object_

Current values of DOM counters.

### Properties

_**documents ( integer )**_<br>
_**nodes ( integer )**_<br>
_**jsEventListeners ( integer )**_<br>


### Class: EventType

_Type: string_

Timeline record type.


### Class: TimelineEvent

_Type: object_

Timeline record contains information about the recorded activity.

### Properties

_**type ( [EventType](#class-eventtype) )**_<br>
> Event type.

_**thread ( optional string )**_<br>
> If present, identifies the thread that produced the event.

_**data ( object )**_<br>
> Event data.

_**children ( optional array of [TimelineEvent](#class-timelineevent) )**_<br>
> Nested records.

_**counters ( optional [DOMCounters](#class-domcounters) )**_<br>
> Current values of DOM counters.

_**usedHeapSize ( optional integer )**_<br>
> Current size of JS heap.





