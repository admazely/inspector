# Memory

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [getDOMNodeCount](#memorygetdomnodecountcallback)
 * [getProcessMemoryDistribution](#memorygetprocessmemorydistributioncallback)
* Types
 * [NodeCount](#class-nodecount)
 * [ListenerCount](#class-listenercount)
 * [StringStatistics](#class-stringstatistics)
 * [DOMGroup](#class-domgroup)
 * [MemoryBlock](#class-memoryblock)


## Commands

### Memory.getDOMNodeCount(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**domGroups ( array of [DOMGroup](#class-domgroup) )**_<br>
_**strings ( [StringStatistics](#class-stringstatistics) )**_<br>


### Memory.getProcessMemoryDistribution(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**distribution ( [MemoryBlock](#class-memoryblock) )**_<br>
> An object describing all memory allocated by the process



## Types

### Class: NodeCount

_Type: object_

Number of nodes with given name.

### Properties

_**nodeName ( string )**_<br>
_**count ( integer )**_<br>


### Class: ListenerCount

_Type: object_

Number of JS event listeners by event type.

### Properties

_**type ( string )**_<br>
_**count ( integer )**_<br>


### Class: StringStatistics

_Type: object_

Character data statistics for the page.

### Properties

_**dom ( integer )**_<br>
_**js ( integer )**_<br>
_**shared ( integer )**_<br>


### Class: DOMGroup

_Type: object_

### Properties

_**size ( integer )**_<br>
_**title ( string )**_<br>
_**documentURI ( optional string )**_<br>
_**nodeCount ( array of [NodeCount](#class-nodecount) )**_<br>
_**listenerCount ( array of [ListenerCount](#class-listenercount) )**_<br>


### Class: MemoryBlock

_Type: object_

### Properties

_**size ( optional number )**_<br>
> Size of the block in bytes if available

_**name ( string )**_<br>
> Unique name used to identify the component that allocated this block

_**children ( optional array of [MemoryBlock](#class-memoryblock) )**_<br>




