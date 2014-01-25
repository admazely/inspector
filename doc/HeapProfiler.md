# HeapProfiler

_Auto generated documentation for WebKit inspector

* Commands
 * [hasHeapProfiler](#heapprofilerhasheapprofilercallback)
 * [getProfileHeaders](#heapprofilergetprofileheaderscallback)
 * [getHeapSnapshot](#heapprofilergetheapsnapshotuid-callback)
 * [removeProfile](#heapprofilerremoveprofileuid-callback)
 * [clearProfiles](#heapprofilerclearprofilescallback)
 * [takeHeapSnapshot](#heapprofilertakeheapsnapshotreportprogress-callback)
 * [collectGarbage](#heapprofilercollectgarbagecallback)
 * [getObjectByHeapObjectId](#heapprofilergetobjectbyheapobjectidheapsnapshotobjectid-objectgroup-callback)
 * [getHeapObjectId](#heapprofilergetheapobjectidruntimeremoteobjectid-callback)
* Events
 * [addProfileHeader](#event-addprofileheader)
 * [addHeapSnapshotChunk](#event-addheapsnapshotchunk)
 * [finishHeapSnapshot](#event-finishheapsnapshot)
 * [resetProfiles](#event-resetprofiles)
 * [reportHeapSnapshotProgress](#event-reportheapsnapshotprogress)
* Types
 * [ProfileHeader](#class-profileheader)
 * [HeapSnapshotObjectId](#class-heapsnapshotobjectid)


## Commands

### HeapProfiler.hasHeapProfiler(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>


### HeapProfiler.getProfileHeaders(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**headers ( array of [ProfileHeader](#class-profileheader) )**_<br>


### HeapProfiler.getHeapSnapshot(uid, callback)

### Parameters

_**uid ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### HeapProfiler.removeProfile(uid, callback)

### Parameters

_**uid ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### HeapProfiler.clearProfiles(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### HeapProfiler.takeHeapSnapshot([reportProgress], callback)

### Parameters

_**reportProgress ( optional boolean )**_<br>
> If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### HeapProfiler.collectGarbage(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### HeapProfiler.getObjectByHeapObjectId([HeapSnapshotObjectId](#class-heapsnapshotobjectid), [objectGroup], callback)

### Parameters

_**objectId ( [HeapSnapshotObjectId](#class-heapsnapshotobjectid) )**_<br>
_**objectGroup ( optional string )**_<br>
> Symbolic group name that can be used to release multiple objects.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( [Runtime.RemoteObject](Runtime.md#class-remoteobject) )**_<br>
> Evaluation result.



### HeapProfiler.getHeapObjectId([Runtime.RemoteObjectId](Runtime.md#class-remoteobjectid), callback)

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

_**title ( string )**_<br>
> Profile title.

_**uid ( integer )**_<br>
> Unique identifier of the profile.

_**maxJSObjectId ( optional integer )**_<br>
> Last seen JS object Id.



### Class: HeapSnapshotObjectId

_Type: string_

Heap snashot object id.




