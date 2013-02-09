# DOMStorage

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [enable](#domstorageenablecallback)
 * [disable](#domstoragedisablecallback)
 * [getDOMStorageEntries](#domstoragegetdomstorageentriesstorageid-callback)
 * [setDOMStorageItem](#domstoragesetdomstorageitemstorageid-key-value-callback)
 * [removeDOMStorageItem](#domstorageremovedomstorageitemstorageid-key-callback)
* Events
 * [addDOMStorage](#event-adddomstorage)
 * [domStorageItemsCleared](#event-domstorageitemscleared)
 * [domStorageItemRemoved](#event-domstorageitemremoved)
 * [domStorageItemAdded](#event-domstorageitemadded)
 * [domStorageItemUpdated](#event-domstorageitemupdated)
* Types
 * [StorageId](#class-storageid)
 * [Entry](#class-entry)
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


### DOMStorage.getDOMStorageEntries([StorageId](#class-storageid), callback)

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
_**success ( boolean )**_<br>


### DOMStorage.removeDOMStorageItem([StorageId](#class-storageid), key, callback)

### Parameters

_**storageId ( [StorageId](#class-storageid) )**_<br>
_**key ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**success ( boolean )**_<br>


## Events

### Event: addDOMStorage

### Results

_**storage ( [Entry](#class-entry) )**_<br>


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

_Type: string_

Unique identifier of DOM storage entry.


### Class: Entry

_Type: object_

DOM Storage entry.

### Properties

_**origin ( string )**_<br>
> Document origin.

_**isLocalStorage ( boolean )**_<br>
> True for local storage.

_**id ( [StorageId](#class-storageid) )**_<br>
> Entry id for further reference.



### Class: Item

_Type: array_

DOM Storage item.




