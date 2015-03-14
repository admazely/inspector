# Timeline

_Auto generated documentation for WebKit inspector

Timeline provides its clients with instrumentation records that are generated during the page runtime. Timeline instrumentation can be started and stopped using corresponding commands. While timeline is started, it is generating timeline event records.


* Commands
 * [start](#timelinestartmaxcallstackdepth-callback)
 * [stop](#timelinestopcallback)
* Events
 * [eventRecorded](#event-eventrecorded)
 * [recordingStarted](#event-recordingstarted)
 * [recordingStopped](#event-recordingstopped)
* Types
 * [EventType](#class-eventtype)
 * [TimelineEvent](#class-timelineevent)
 * [CPUProfileNodeCall](#class-cpuprofilenodecall)
 * [CPUProfileNode](#class-cpuprofilenode)
 * [CPUProfile](#class-cpuprofile)


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


## Events

### Event: eventRecorded

Fired for every instrumentation event while timeline is started.

### Results

_**record ( [TimelineEvent](#class-timelineevent) )**_<br>
> Timeline event record data.



### Event: recordingStarted

Fired when recording has started.


### Event: recordingStopped

Fired when recording has stopped.


## Types

### Class: EventType

_Type: string_

Timeline record type.


### Class: TimelineEvent

_Type: object_

Timeline record contains information about the recorded activity.

### Properties

_**type ( [EventType](#class-eventtype) )**_<br>
> Event type.

_**data ( object )**_<br>
> Event data.

_**children ( optional array of [TimelineEvent](#class-timelineevent) )**_<br>
> Nested records.



### Class: CPUProfileNodeCall

_Type: object_

CPU Profile call info. Holds time information for a specific call that happened on a node.

### Properties

_**startTime ( number )**_<br>
> Start time for the call.

_**totalTime ( number )**_<br>
> Total execution time for the call.



### Class: CPUProfileNode

_Type: object_

CPU Profile node. Holds callsite information, execution statistics and child nodes.

### Properties

_**id ( integer )**_<br>
> Unique identifier for this call site.

_**calls ( array of [CPUProfileNodeCall](#class-cpuprofilenodecall) )**_<br>
> Calls making up this node.

_**functionName ( optional string )**_<br>
> Function name.

_**url ( optional string )**_<br>
> URL.

_**lineNumber ( optional integer )**_<br>
> Line number.

_**columnNumber ( optional integer )**_<br>
> Column number.

_**children ( optional array of [CPUProfileNode](#class-cpuprofilenode) )**_<br>
> Child nodes.



### Class: CPUProfile

_Type: object_

Profile.

### Properties

_**rootNodes ( array of [CPUProfileNode](#class-cpuprofilenode) )**_<br>
> Top level nodes in the stack.

_**idleTime ( optional number )**_<br>




