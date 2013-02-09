# Memory

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [getDOMCounters](#memorygetdomcounterscallback)
 * [getProcessMemoryDistribution](#memorygetprocessmemorydistributionreportgraph-callback)
* Events
 * [addNativeSnapshotChunk](#event-addnativesnapshotchunk)
* Types
 * [MemoryBlock](#class-memoryblock)
 * [HeapSnapshotChunk](#class-heapsnapshotchunk)


## Commands

### Memory.getDOMCounters(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**documents ( integer )**_<br>
_**nodes ( integer )**_<br>
_**jsEventListeners ( integer )**_<br>


### Memory.getProcessMemoryDistribution([reportGraph], callback)

### Parameters

_**reportGraph ( optional boolean )**_<br>
> Whether native memory graph should be reported in addition to aggregated statistics.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**distribution ( [MemoryBlock](#class-memoryblock) )**_<br>
> An object describing all memory allocated by the process



## Events

### Event: addNativeSnapshotChunk

### Results

_**chunk ( [HeapSnapshotChunk](#class-heapsnapshotchunk) )**_<br>
> A chunk of the serialized the snapshot.



## Types

### Class: MemoryBlock

_Type: object_

### Properties

_**size ( optional number )**_<br>
> Size of the block in bytes if available

_**name ( string )**_<br>
> Unique name used to identify the component that allocated this block

_**children ( optional array of [MemoryBlock](#class-memoryblock) )**_<br>


### Class: HeapSnapshotChunk

_Type: object_

### Properties

_**strings ( array )**_<br>
> An array of strings that were found since last update.

_**nodes ( array )**_<br>
> An array of nodes that were found since last update.

_**edges ( array )**_<br>
> An array of edges that were found since last update.

_**baseToRealNodeId ( array )**_<br>
> An array of integers for nodeId remapping. Even nodeId has to be mapped to the following odd nodeId.





