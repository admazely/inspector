# Profiler

_Auto generated documentation for WebKit inspector

* Commands
 * [isSampling](#profilerissamplingcallback)
 * [hasHeapProfiler](#profilerhasheapprofilercallback)
 * [enable](#profilerenablecallback)
 * [disable](#profilerdisablecallback)
 * [start](#profilerstartcallback)
 * [stop](#profilerstopcallback)
 * [getProfileHeaders](#profilergetprofileheaderscallback)
 * [getCPUProfile](#profilergetcpuprofileuid-callback)
 * [getHeapSnapshot](#profilergetheapsnapshotuid-callback)
 * [removeProfile](#profilerremoveprofiletype-uid-callback)
 * [clearProfiles](#profilerclearprofilescallback)
 * [takeHeapSnapshot](#profilertakeheapsnapshotreportprogress-callback)
 * [collectGarbage](#profilercollectgarbagecallback)
 * [getObjectByHeapObjectId](#profilergetobjectbyheapobjectidheapsnapshotobjectid-objectgroup-callback)
 * [getHeapObjectId](#profilergetheapobjectidruntimeremoteobjectid-callback)
* Events
 * [addProfileHeader](#event-addprofileheader)
 * [addHeapSnapshotChunk](#event-addheapsnapshotchunk)
 * [finishHeapSnapshot](#event-finishheapsnapshot)
 * [setRecordingProfile](#event-setrecordingprofile)
 * [resetProfiles](#event-resetprofiles)
 * [reportHeapSnapshotProgress](#event-reportheapsnapshotprogress)
* Types
 * [ProfileHeader](#class-profileheader)
 * [CPUProfileNode](#class-cpuprofilenode)
 * [CPUProfile](#class-cpuprofile)
 * [HeapSnapshotObjectId](#class-heapsnapshotobjectid)


## Commands

### Profiler.isSampling(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>


### Profiler.hasHeapProfiler(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>


### Profiler.enable(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.disable(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.start(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.stop(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.getProfileHeaders(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**headers ( array of [ProfileHeader](#class-profileheader) )**_<br>


### Profiler.getCPUProfile(uid, callback)

### Parameters

_**uid ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**profile ( [CPUProfile](#class-cpuprofile) )**_<br>


### Profiler.getHeapSnapshot(uid, callback)

### Parameters

_**uid ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.removeProfile(type, uid, callback)

### Parameters

_**type ( string )**_<br>
_**uid ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.clearProfiles(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.takeHeapSnapshot([reportProgress], callback)

### Parameters

_**reportProgress ( optional boolean )**_<br>
> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.collectGarbage(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Profiler.getObjectByHeapObjectId([HeapSnapshotObjectId](#class-heapsnapshotobjectid), [objectGroup], callback)

### Parameters

_**objectId ( [HeapSnapshotObjectId](#class-heapsnapshotobjectid) )**_<br>
_**objectGroup ( optional string )**_<br>
> Symbolic group name that can be used to release multiple objects.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Evaluation result.



### Profiler.getHeapObjectId([Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid), callback)

### Parameters

_**objectId ( [Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid) )**_<br>
> Identifier of the object to get heap object id for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**heapSnapshotObjectId ( [HeapSnapshotObjectId](#class-heapsnapshotobjectid) )**_<br>
> Id of the heap snapshot object corresponding to the passed remote object id.



## Events

### Event: addProfileHeader

### Results

_**header ( [ProfileHeader](#class-profileheader) )**_<br>


### Event: addHeapSnapshotChunk

### Results

_**uid ( integer )**_<br>
_**chunk ( string )**_<br>


### Event: finishHeapSnapshot

### Results

_**uid ( integer )**_<br>


### Event: setRecordingProfile

### Results

_**isProfiling ( boolean )**_<br>


### Event: resetProfiles


### Event: reportHeapSnapshotProgress

### Results

_**done ( integer )**_<br>
_**total ( integer )**_<br>


## Types

### Class: ProfileHeader

_Type: object_

Profile header.

### Properties

_**typeId ( string enumerated ["CPU","CSS","HEAP"] )**_<br>
> Profile type name.

_**title ( string )**_<br>
> Profile title.

_**uid ( integer )**_<br>
> Unique identifier of the profile.

_**maxJSObjectId ( optional integer )**_<br>
> Last seen JS object Id.



### Class: CPUProfileNode

_Type: object_

CPU Profile node. Holds callsite information, execution statistics and child nodes.

### Properties

_**functionName ( string )**_<br>
> Function name.

_**url ( string )**_<br>
> URL.

_**lineNumber ( integer )**_<br>
> Line number.

_**totalTime ( number )**_<br>
> Total execution time.

_**selfTime ( number )**_<br>
> Self time.

_**numberOfCalls ( integer )**_<br>
> Number of calls.

_**visible ( boolean )**_<br>
> Visibility.

_**callUID ( number )**_<br>
> Call UID.

_**children ( array of [CPUProfileNode](#class-cpuprofilenode) )**_<br>
> Child nodes.

_**id ( optional integer )**_<br>
> Unique id of the node.



### Class: CPUProfile

_Type: object_

Profile.

### Properties

_**head ( optional [CPUProfileNode](#class-cpuprofilenode) )**_<br>
_**idleTime ( optional number )**_<br>
_**samples ( optional array )**_<br>
> Ids of samples top nodes.



### Class: HeapSnapshotObjectId

_Type: string_

Heap snashot object id.




