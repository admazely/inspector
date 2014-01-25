# DOMStorage

_Auto generated documentation for WebKit inspector

Query and modify DOM storage.


* Commands
 * [enable](#domstorageenablecallback)
 * [disable](#domstoragedisablecallback)
 * [getDOMStorageItems](#domstoragegetdomstorageitemsstorageid-callback)
 * [setDOMStorageItem](#domstoragesetdomstorageitemstorageid-key-value-callback)
 * [removeDOMStorageItem](#domstorageremovedomstorageitemstorageid-key-callback)
* Events
 * [domStorageItemsCleared](#event-domstorageitemscleared)
 * [domStorageItemRemoved](#event-domstorageitemremoved)
 * [domStorageItemAdded](#event-domstorageitemadded)
 * [domStorageItemUpdated](#event-domstorageitemupdated)
* Types
 * [StorageId](#class-storageid)
 * [Item](#class-item)


## Commands

### DOMStorage.enable(callback)

Enables storage tracking, storage events will now be delivered to the client.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMStorage.disable(callback)

Disables storage tracking, prevents storage events from being sent to the client.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMStorage.getDOMStorageItems([StorageId](#class-storageid), callback)

### Parameters

_**storageId ( [StorageId](#class-storageid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**entries ( array of [Item](#class-item) )**_<br>


### DOMStorage.setDOMStorageItem([StorageId](#class-storageid), key, value, callback)

### Parameters

_**storageId ( [StorageId](#class-storageid) )**_<br>
_**key ( string )**_<br>
_**value ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### DOMStorage.removeDOMStorageItem([StorageId](#class-storageid), key, callback)

### Parameters

_**storageId ( [StorageId](#class-storageid) )**_<br>
_**key ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: domStorageItemsCleared

### Results

_**storageId ( [StorageId](#class-storageid) )**_<br>


### Event: domStorageItemRemoved

### Results

_**storageId ( [StorageId](#class-storageid) )**_<br>
_**key ( string )**_<br>


### Event: domStorageItemAdded

### Results

_**storageId ( [StorageId](#class-storageid) )**_<br>
_**key ( string )**_<br>
_**newValue ( string )**_<br>


### Event: domStorageItemUpdated

### Results

_**storageId ( [StorageId](#class-storageid) )**_<br>
_**key ( string )**_<br>
_**oldValue ( string )**_<br>
_**newValue ( string )**_<br>


## Types

### Class: StorageId

_Type: object_

DOM Storage identifier.

### Properties

_**securityOrigin ( string )**_<br>
> Security origin for the storage.

_**isLocalStorage ( boolean )**_<br>
> Whether the storage is local storage (not session storage).



### Class: Item

_Type: array_

DOM Storage item.




