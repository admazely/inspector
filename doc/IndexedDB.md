# IndexedDB

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [enable](#indexeddbenablecallback)
 * [disable](#indexeddbdisablecallback)
 * [requestDatabaseNamesForFrame](#indexeddbrequestdatabasenamesforframenetworkframeid-callback)
 * [requestDatabase](#indexeddbrequestdatabasenetworkframeid-databasename-callback)
 * [requestData](#indexeddbrequestdatanetworkframeid-databasename-objectstorename-indexname-skipcount-pagesize-keyrange-callback)
* Types
 * [SecurityOriginWithDatabaseNames](#class-securityoriginwithdatabasenames)
 * [DatabaseWithObjectStores](#class-databasewithobjectstores)
 * [ObjectStore](#class-objectstore)
 * [ObjectStoreIndex](#class-objectstoreindex)
 * [Key](#class-key)
 * [KeyRange](#class-keyrange)
 * [DataEntry](#class-dataentry)
 * [KeyPath](#class-keypath)


## Commands

### IndexedDB.enable(callback)

Enables events from backend.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### IndexedDB.disable(callback)

Disables events from backend.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### IndexedDB.requestDatabaseNamesForFrame([Network.FrameId](Network.md#class-frameid), callback)

Requests database names for given frame's security origin.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid))**_<br>
> Frame id.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**securityOriginWithDatabaseNames ( [SecurityOriginWithDatabaseNames](#class-securityoriginwithdatabasenames))**_<br>
> Frame with database names.



### IndexedDB.requestDatabase([Network.FrameId](Network.md#class-frameid), databaseName, callback)

Requests database with given name in given frame.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid))**_<br>
> Frame id.

_**databaseName ( string )**_<br>
> Database name.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**databaseWithObjectStores ( [DatabaseWithObjectStores](#class-databasewithobjectstores))**_<br>
> Database with an array of object stores.



### IndexedDB.requestData([Network.FrameId](Network.md#class-frameid), databaseName, objectStoreName, indexName, skipCount, pageSize, [[KeyRange](#class-keyrange)], callback)

Requests data from object store or index.

### Parameters

_**frameId ( [Network.FrameId](Network.md#class-frameid))**_<br>
> Frame id.

_**databaseName ( string )**_<br>
> Database name.

_**objectStoreName ( string )**_<br>
> Object store name.

_**indexName ( string )**_<br>
> Index name, empty string for object store data requests.

_**skipCount ( integer )**_<br>
> Number of records to skip.

_**pageSize ( integer )**_<br>
> Number of records to fetch.

_**keyRange ( optional [KeyRange](#class-keyrange))**_<br>
> Key range.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**objectStoreDataEntries ( array of [DataEntry](#class-dataentry))**_<br>
> Array of object store data entries.

_**hasMore ( boolean )**_<br>
> If true, there are more entries to fetch in the given range.



## Types

### Class: SecurityOriginWithDatabaseNames

_Type: object_

### Properties

_**securityOrigin ( string )**_<br>
> Security origin.

_**databaseNames ( array )**_<br>
> Database names for this origin.



### Class: DatabaseWithObjectStores

_Type: object_

### Properties

_**name ( string )**_<br>
> Database name.

_**version ( string )**_<br>
> Database version.

_**objectStores ( array of [ObjectStore](#class-objectstore))**_<br>
> Object stores in this database.



### Class: ObjectStore

_Type: object_

### Properties

_**name ( string )**_<br>
> Object store name.

_**keyPath ( [KeyPath](#class-keypath))**_<br>
> Object store key path.

_**autoIncrement ( boolean )**_<br>
> If true, object store has auto increment flag set.

_**indexes ( array of [ObjectStoreIndex](#class-objectstoreindex))**_<br>
> Indexes in this object store.



### Class: ObjectStoreIndex

_Type: object_

### Properties

_**name ( string )**_<br>
> Index name.

_**keyPath ( [KeyPath](#class-keypath))**_<br>
> Index key path.

_**unique ( boolean )**_<br>
> If true, index is unique.

_**multiEntry ( boolean )**_<br>
> If true, index allows multiple entries for a key.



### Class: Key

_Type: object_

### Properties

_**type ( string )**_<br>
> Key type.

_**number ( optional number )**_<br>
> Number value.

_**string ( optional string )**_<br>
> String value.

_**date ( optional number )**_<br>
> Date value.

_**array ( optional array of [Key](#class-key))**_<br>
> Array value.



### Class: KeyRange

_Type: object_

### Properties

_**lower ( optional [Key](#class-key))**_<br>
> Lower bound.

_**upper ( optional [Key](#class-key))**_<br>
> Upper bound.

_**lowerOpen ( boolean )**_<br>
> If true lower bound is open.

_**upperOpen ( boolean )**_<br>
> If true upper bound is open.



### Class: DataEntry

_Type: object_

### Properties

_**key ( [Key](#class-key))**_<br>
> Key.

_**primaryKey ( [Key](#class-key))**_<br>
> Primary key.

_**value ( [Runtime.RemoteObject](Runtime.md#class-remoteobject))**_<br>
> Value.



### Class: KeyPath

_Type: object_

### Properties

_**type ( string )**_<br>
> Key path type.

_**string ( optional string )**_<br>
> String value.

_**array ( optional array )**_<br>
> Array value.





