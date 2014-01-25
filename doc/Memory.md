# Memory

_Auto generated documentation for WebKit inspector

* Commands
 * [getDOMCounters](#memorygetdomcounterscallback)
* Types
 * [MemoryBlock](#class-memoryblock)


## Commands

### Memory.getDOMCounters(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**documents ( integer )**_<br>
_**nodes ( integer )**_<br>
_**jsEventListeners ( integer )**_<br>


## Types

### Class: MemoryBlock

_Type: object_

### Properties

_**size ( optional number )**_<br>
> Size of the block in bytes if available

_**name ( string )**_<br>
> Unique name used to identify the component that allocated this block

_**children ( optional array of [MemoryBlock](#class-memoryblock) )**_<br>




