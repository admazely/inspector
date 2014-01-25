# ApplicationCache

_Auto generated documentation for WebKit inspector

* Commands
 * [getFramesWithManifests](#applicationcachegetframeswithmanifestscallback)
 * [enable](#applicationcacheenablecallback)
 * [getManifestForFrame](#applicationcachegetmanifestforframenetworkframeid-callback)
 * [getApplicationCacheForFrame](#applicationcachegetapplicationcacheforframenetworkframeid-callback)
* Events
 * [applicationCacheStatusUpdated](#event-applicationcachestatusupdated)
 * [networkStateUpdated](#event-networkstateupdated)
* Types
 * [ApplicationCacheResource](#class-applicationcacheresource)
 * [ApplicationCache](#class-applicationcache)
 * [FrameWithManifest](#class-framewithmanifest)


## Commands

### ApplicationCache.getFramesWithManifests(callback)

Returns array of frame identifiers with manifest urls for each frame containing a document associated with some application cache.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**frameIds ( array of [FrameWithManifest](#class-framewithmanifest) )**_<br>
> Array of frame identifiers with manifest urls for each frame containing a document associated with some application cache.



### ApplicationCache.enable(callback)

Enables application cache domain notifications.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### ApplicationCache.getManifestForFrame([Network.FrameId](Network.md#class-frameid), callback)

Returns manifest URL for document in the given frame.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Identifier of the frame containing document whose manifest is retrieved.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**manifestURL ( string )**_<br>
> Manifest URL for document in the given frame.



### ApplicationCache.getApplicationCacheForFrame([Network.FrameId](Network.md#class-frameid), callback)

Returns relevant application cache data for the document in given frame.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Identifier of the frame containing document whose application cache is retrieved.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**applicationCache ( [ApplicationCache](#class-applicationcache) )**_<br>
> Relevant application cache data for the document in given frame.



## Events

### Event: applicationCacheStatusUpdated

### Results

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Identifier of the frame containing document whose application cache updated status.

_**manifestURL ( string )**_<br>
> Manifest URL.

_**status ( integer )**_<br>
> Updated application cache status.



### Event: networkStateUpdated

### Results

_**isNowOnline ( boolean )**_<br>


## Types

### Class: ApplicationCacheResource

_Type: object_

Detailed application cache resource information.

### Properties

_**url ( string )**_<br>
> Resource url.

_**size ( integer )**_<br>
> Resource size.

_**type ( string )**_<br>
> Resource type.



### Class: ApplicationCache

_Type: object_

Detailed application cache information.

### Properties

_**manifestURL ( string )**_<br>
> Manifest URL.

_**size ( number )**_<br>
> Application cache size.

_**creationTime ( number )**_<br>
> Application cache creation time.

_**updateTime ( number )**_<br>
> Application cache update time.

_**resources ( array of [ApplicationCacheResource](#class-applicationcacheresource) )**_<br>
> Application cache resources.



### Class: FrameWithManifest

_Type: object_

Frame identifier - manifest URL pair.

### Properties

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Frame identifier.

_**manifestURL ( string )**_<br>
> Manifest URL.

_**status ( integer )**_<br>
> Application cache status.





