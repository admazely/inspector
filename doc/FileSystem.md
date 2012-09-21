# FileSystem

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [enable](#filesystemenablecallback)
 * [disable](#filesystemdisablecallback)
 * [requestFileSystemRoot](#filesystemrequestfilesystemrootorigin-type-callback)
 * [requestDirectoryContent](#filesystemrequestdirectorycontenturl-callback)
 * [requestMetadata](#filesystemrequestmetadataurl-callback)
 * [requestFileContent](#filesystemrequestfilecontenturl-readastext-start-end-charset-callback)
 * [deleteEntry](#filesystemdeleteentryurl-callback)
* Types
 * [Entry](#class-entry)
 * [Metadata](#class-metadata)


## Commands

### FileSystem.enable(callback)

Enables events from backend.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### FileSystem.disable(callback)

Disables events from backend.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### FileSystem.requestFileSystemRoot(origin, type, callback)

Returns root directory of the FileSystem, if exists.

### Parameters

_**origin ( string )**_<br>
> Security origin of requesting FileSystem. One of frames in current page needs to have this security origin.

_**type ( string )**_<br>
> FileSystem type of requesting FileSystem.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**errorCode ( integer )**_<br>
> 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.

_**root ( optional [Entry](#class-entry))**_<br>
> Contains root of the requested FileSystem if the command completed successfully.



### FileSystem.requestDirectoryContent(url, callback)

Returns content of the directory.

### Parameters

_**url ( string )**_<br>
> URL of the directory that the frontend is requesting to read from.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**errorCode ( integer )**_<br>
> 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.

_**entries ( optional array of [Entry](#class-entry))**_<br>
> Contains all entries on directory if the command completed successfully.



### FileSystem.requestMetadata(url, callback)

Returns metadata of the entry.

### Parameters

_**url ( string )**_<br>
> URL of the entry that the frontend is requesting to get metadata from.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**errorCode ( integer )**_<br>
> 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.

_**metadata ( optional [Metadata](#class-metadata))**_<br>
> Contains metadata of the entry if the command completed successfully.



### FileSystem.requestFileContent(url, readAsText, [start], [end], [charset], callback)

Returns content of the file. Result should be sliced into [start, end).

### Parameters

_**url ( string )**_<br>
> URL of the file that the frontend is requesting to read from.

_**readAsText ( boolean )**_<br>
> True if the content should be read as text, otherwise the result will be returned as base64 encoded text.

_**start ( optional integer )**_<br>
> Specifies the start of range to read.

_**end ( optional integer )**_<br>
> Specifies the end of range to read exclusively.

_**charset ( optional string )**_<br>
> Overrides charset of the content when content is served as text.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**errorCode ( integer )**_<br>
> 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.

_**content ( optional string )**_<br>
> Content of the file.

_**charset ( optional string )**_<br>
> Charset of the content if it is served as text.



### FileSystem.deleteEntry(url, callback)

Deletes specified entry. If the entry is a directory, the agent deletes children recursively.

### Parameters

_**url ( string )**_<br>
> URL of the entry to delete.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**errorCode ( integer )**_<br>
> 0, if no error. Otherwise errorCode is set to FileError::ErrorCode value.



## Types

### Class: Entry

_Type: object_

### Properties

_**url ( string )**_<br>
> filesystem: URL for the entry.

_**name ( string )**_<br>
> The name of the file or directory.

_**isDirectory ( boolean )**_<br>
> True if the entry is a directory.

_**mimeType ( optional string )**_<br>
> MIME type of the entry, available for a file only.

_**resourceType ( optional [Page.ResourceType](Page.md#class-resourcetype))**_<br>
> ResourceType of the entry, available for a file only.

_**isTextFile ( optional boolean )**_<br>
> True if the entry is a text file.



### Class: Metadata

_Type: object_

### Properties

_**modificationTime ( number )**_<br>
> Modification time.

_**size ( number )**_<br>
> File size. This field is always zero for directories.





