# Profiler

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [causesRecompilation](#profilercausesrecompilationcallback)
 * [isSampling](#profilerissamplingcallback)
 * [hasHeapProfiler](#profilerhasheapprofilercallback)
 * [enable](#profilerenablecallback)
 * [disable](#profilerdisablecallback)
 * [start](#profilerstartcallback)
 * [stop](#profilerstopcallback)
 * [getProfileHeaders](#profilergetprofileheaderscallback)
 * [getProfile](#profilergetprofiletype-uid-callback)
 * [removeProfile](#profilerremoveprofiletype-uid-callback)
 * [clearProfiles](#profilerclearprofilescallback)
 * [takeHeapSnapshot](#profilertakeheapsnapshotcallback)
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
 * [Profile](#class-profile)
 * [HeapSnapshotObjectId](#class-heapsnapshotobjectid)


## Commands

### Profiler.causesRecompilation(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>


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
_**headers ( array of [ProfileHeader](#class-profileheader))**_<br>


### Profiler.getProfile(type, uid, callback)

### Parameters

_**type ( string )**_<br>
_**uid ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**profile ( [Profile](#class-profile))**_<br>


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


### Profiler.takeHeapSnapshot(callback)

### Parameters

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

_**objectId ( [HeapSnapshotObjectId](#class-heapsnapshotobjectid))**_<br>
_**objectGroup ( optional string )**_<br>
> Symbolic group name that can be used to release multiple objects.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [Runtime.RemoteObject](Runtime.md#class-remoteobject))**_<br>
> Evaluation result.



### Profiler.getHeapObjectId([Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid), callback)

### Parameters

_**objectId ( [Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid))**_<br>
> Identifier of the object to get heap object id for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**heapSnapshotObjectId ( [HeapSnapshotObjectId](#class-heapsnapshotobjectid))**_<br>
> Id of the heap snapshot object corresponding to the passed remote object id.



## Events

### Event: addProfileHeader

### Results

_**header ( [ProfileHeader](#class-profileheader))**_<br>


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

### Properties

_**typeId ( string )**_<br>
> Profile type name.

_**title ( string )**_<br>
> Profile title.

_**uid ( integer )**_<br>
> Unique identifier of the profile.

_**maxJSObjectId ( optional integer )**_<br>
> Last seen JS object Id.



### Class: Profile

_Type: object_

### Properties

_**head ( optional object )**_<br>
_**bottomUpHead ( optional object )**_<br>


### Class: HeapSnapshotObjectId

_Type: string_




