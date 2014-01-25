# Database

_Auto generated documentation for WebKit inspector

* Commands
 * [enable](#databaseenablecallback)
 * [disable](#databasedisablecallback)
 * [getDatabaseTableNames](#databasegetdatabasetablenamesdatabaseid-callback)
 * [executeSQL](#databaseexecutesqldatabaseid-query-callback)
* Events
 * [addDatabase](#event-adddatabase)
* Types
 * [DatabaseId](#class-databaseid)
 * [Database](#class-database)
 * [Error](#class-error)


## Commands

### Database.enable(callback)

Enables database tracking, database events will now be delivered to the client.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Database.disable(callback)

Disables database tracking, prevents database events from being sent to the client.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Database.getDatabaseTableNames([DatabaseId](#class-databaseid), callback)

### Parameters

_**databaseId ( [DatabaseId](#class-databaseid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**tableNames ( array )**_<br>


### Database.executeSQL([DatabaseId](#class-databaseid), query, callback)

### Parameters

_**databaseId ( [DatabaseId](#class-databaseid) )**_<br>
_**query ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**columnNames ( optional array )**_<br>
_**values ( optional array )**_<br>
_**sqlError ( optional [Error](#class-error) )**_<br>


## Events

### Event: addDatabase

### Results

_**database ( [Database](#class-database) )**_<br>


## Types

### Class: DatabaseId

_Type: string_

Unique identifier of Database object.


### Class: Database

_Type: object_

Database object.

### Properties

_**id ( [DatabaseId](#class-databaseid) )**_<br>
> Database ID.

_**domain ( string )**_<br>
> Database domain.

_**name ( string )**_<br>
> Database name.

_**version ( string )**_<br>
> Database version.



### Class: Error

_Type: object_

Database error.

### Properties

_**message ( string )**_<br>
> Error message.

_**code ( integer )**_<br>
> Error code.





