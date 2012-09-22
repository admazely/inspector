# Network

_Auto generated documentation for WebKit inspector `1.0`_

Network domain allows tracking network activities of the page. It exposes information about http, file, data and other requests and responses, their headers, bodies, timing, etc.


* Commands
 * [enable](#networkenablecallback)
 * [disable](#networkdisablecallback)
 * [setUserAgentOverride](#networksetuseragentoverrideuseragent-callback)
 * [setExtraHTTPHeaders](#networksetextrahttpheadersheaders-callback)
 * [getResponseBody](#networkgetresponsebodyrequestid-callback)
 * [replayXHR](#networkreplayxhrrequestid-callback)
 * [canClearBrowserCache](#networkcanclearbrowsercachecallback)
 * [clearBrowserCache](#networkclearbrowsercachecallback)
 * [canClearBrowserCookies](#networkcanclearbrowsercookiescallback)
 * [clearBrowserCookies](#networkclearbrowsercookiescallback)
 * [setCacheDisabled](#networksetcachedisabledcachedisabled-callback)
* Events
 * [requestWillBeSent](#event-requestwillbesent)
 * [requestServedFromCache](#event-requestservedfromcache)
 * [responseReceived](#event-responsereceived)
 * [dataReceived](#event-datareceived)
 * [loadingFinished](#event-loadingfinished)
 * [loadingFailed](#event-loadingfailed)
 * [requestServedFromMemoryCache](#event-requestservedfrommemorycache)
 * [webSocketWillSendHandshakeRequest](#event-websocketwillsendhandshakerequest)
 * [webSocketHandshakeResponseReceived](#event-websockethandshakeresponsereceived)
 * [webSocketCreated](#event-websocketcreated)
 * [webSocketClosed](#event-websocketclosed)
 * [webSocketFrameReceived](#event-websocketframereceived)
 * [webSocketFrameError](#event-websocketframeerror)
 * [webSocketFrameSent](#event-websocketframesent)
* Types
 * [LoaderId](#class-loaderid)
 * [FrameId](#class-frameid)
 * [RequestId](#class-requestid)
 * [Timestamp](#class-timestamp)
 * [Headers](#class-headers)
 * [ResourceTiming](#class-resourcetiming)
 * [Request](#class-request)
 * [Response](#class-response)
 * [WebSocketRequest](#class-websocketrequest)
 * [WebSocketResponse](#class-websocketresponse)
 * [WebSocketFrame](#class-websocketframe)
 * [CachedResource](#class-cachedresource)
 * [Initiator](#class-initiator)


## Commands

### Network.enable(callback)

Enables network tracking, network events will now be delivered to the client.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Network.disable(callback)

Disables network tracking, prevents network events from being sent to the client.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Network.setUserAgentOverride(userAgent, callback)

Allows overriding user agent with the given string.

### Parameters

_**userAgent ( string )**_<br>
> User agent to use.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Network.setExtraHTTPHeaders([Headers](#class-headers), callback)

Specifies whether to always send extra HTTP headers with the requests from this page.

### Parameters

_**headers ( [Headers](#class-headers) )**_<br>
> Map with extra HTTP headers.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Network.getResponseBody([RequestId](#class-requestid), callback)

Returns content served for the given request.

### Parameters

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Identifier of the network request to get content for.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**body ( string )**_<br>
> Response body.

_**base64Encoded ( boolean )**_<br>
> True, if content was sent as base64.



### Network.replayXHR([RequestId](#class-requestid), callback)

This method sends a new XMLHttpRequest which is identical to the original one. The following parameters should be identical: method, url, async, request body, extra headers, withCredentials attribute, user, password.

### Parameters

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Identifier of XHR to replay.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Network.canClearBrowserCache(callback)

Tells whether clearing browser cache is supported.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if browser cache can be cleared.



### Network.clearBrowserCache(callback)

Clears browser cache.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Network.canClearBrowserCookies(callback)

Tells whether clearing browser cookies is supported.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**result ( boolean )**_<br>
> True if browser cookies can be cleared.



### Network.clearBrowserCookies(callback)

Clears browser cookies.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Network.setCacheDisabled(cacheDisabled, callback)

Toggles ignoring cache for each request. If `true`, cache will not be used.

### Parameters

_**cacheDisabled ( boolean )**_<br>
> Cache disabled state.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


## Events

### Event: requestWillBeSent

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**frameId ( [FrameId](#class-frameid) )**_<br>
> Frame identifier.

_**loaderId ( [LoaderId](#class-loaderid) )**_<br>
> Loader identifier.

_**documentURL ( string )**_<br>
> URL of the document this request is loaded for.

_**request ( [Request](#class-request) )**_<br>
> Request data.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**initiator ( [Initiator](#class-initiator) )**_<br>
> Request initiator.

_**redirectResponse ( optional [Response](#class-response) )**_<br>
> Redirect response data.



### Event: requestServedFromCache

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.



### Event: responseReceived

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**frameId ( [FrameId](#class-frameid) )**_<br>
> Frame identifier.

_**loaderId ( [LoaderId](#class-loaderid) )**_<br>
> Loader identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**type ( [Page.ResourceType](Page.md#class-resourcetype) )**_<br>
> Resource type.

_**response ( [Response](#class-response) )**_<br>
> Response data.



### Event: dataReceived

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**dataLength ( integer )**_<br>
> Data chunk length.

_**encodedDataLength ( integer )**_<br>
> Actual bytes received (might be less than dataLength for compressed encodings).



### Event: loadingFinished

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.



### Event: loadingFailed

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**errorText ( string )**_<br>
> User friendly error message.

_**canceled ( optional boolean )**_<br>
> True if loading was canceled.



### Event: requestServedFromMemoryCache

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**frameId ( [FrameId](#class-frameid) )**_<br>
> Frame identifier.

_**loaderId ( [LoaderId](#class-loaderid) )**_<br>
> Loader identifier.

_**documentURL ( string )**_<br>
> URL of the document this request is loaded for.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**initiator ( [Initiator](#class-initiator) )**_<br>
> Request initiator.

_**resource ( [CachedResource](#class-cachedresource) )**_<br>
> Cached resource data.



### Event: webSocketWillSendHandshakeRequest

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**request ( [WebSocketRequest](#class-websocketrequest) )**_<br>
> WebSocket request data.



### Event: webSocketHandshakeResponseReceived

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**response ( [WebSocketResponse](#class-websocketresponse) )**_<br>
> WebSocket response data.



### Event: webSocketCreated

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**url ( string )**_<br>
> WebSocket request URL.



### Event: webSocketClosed

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.



### Event: webSocketFrameReceived

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**response ( [WebSocketFrame](#class-websocketframe) )**_<br>
> WebSocket response data.



### Event: webSocketFrameError

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**errorMessage ( string )**_<br>
> WebSocket frame error message.



### Event: webSocketFrameSent

### Results

_**requestId ( [RequestId](#class-requestid) )**_<br>
> Request identifier.

_**timestamp ( [Timestamp](#class-timestamp) )**_<br>
> Timestamp.

_**response ( [WebSocketFrame](#class-websocketframe) )**_<br>
> WebSocket response data.



## Types

### Class: LoaderId

_Type: string_


### Class: FrameId

_Type: string_


### Class: RequestId

_Type: string_


### Class: Timestamp

_Type: number_


### Class: Headers

_Type: object_


### Class: ResourceTiming

_Type: object_

### Properties

_**requestTime ( number )**_<br>
> Timing's requestTime is a baseline in seconds, while the other numbers are ticks in milliseconds relatively to this requestTime.

_**proxyStart ( number )**_<br>
> Started resolving proxy.

_**proxyEnd ( number )**_<br>
> Finished resolving proxy.

_**dnsStart ( number )**_<br>
> Started DNS address resolve.

_**dnsEnd ( number )**_<br>
> Finished DNS address resolve.

_**connectStart ( number )**_<br>
> Started connecting to the remote host.

_**connectEnd ( number )**_<br>
> Connected to the remote host.

_**sslStart ( number )**_<br>
> Started SSL handshake.

_**sslEnd ( number )**_<br>
> Finished SSL handshake.

_**sendStart ( number )**_<br>
> Started sending request.

_**sendEnd ( number )**_<br>
> Finished sending request.

_**receiveHeadersEnd ( number )**_<br>
> Finished receiving response headers.



### Class: Request

_Type: object_

### Properties

_**url ( string )**_<br>
> Request URL.

_**method ( string )**_<br>
> HTTP request method.

_**headers ( [Headers](#class-headers) )**_<br>
> HTTP request headers.

_**postData ( optional string )**_<br>
> HTTP POST request data.



### Class: Response

_Type: object_

### Properties

_**url ( string )**_<br>
> Response URL.

_**status ( number )**_<br>
> HTTP response status code.

_**statusText ( string )**_<br>
> HTTP response status text.

_**headers ( [Headers](#class-headers) )**_<br>
> HTTP response headers.

_**headersText ( optional string )**_<br>
> HTTP response headers text.

_**mimeType ( string )**_<br>
> Resource mimeType as determined by the browser.

_**requestHeaders ( optional [Headers](#class-headers) )**_<br>
> Refined HTTP request headers that were actually transmitted over the network.

_**requestHeadersText ( optional string )**_<br>
> HTTP request headers text.

_**connectionReused ( boolean )**_<br>
> Specifies whether physical connection was actually reused for this request.

_**connectionId ( number )**_<br>
> Physical connection id that was actually used for this request.

_**fromDiskCache ( optional boolean )**_<br>
> Specifies that the request was served from the disk cache.

_**timing ( optional [ResourceTiming](#class-resourcetiming) )**_<br>
> Timing information for the given request.



### Class: WebSocketRequest

_Type: object_

### Properties

_**requestKey3 ( string )**_<br>
> HTTP response status text.

_**headers ( [Headers](#class-headers) )**_<br>
> HTTP response headers.



### Class: WebSocketResponse

_Type: object_

### Properties

_**status ( number )**_<br>
> HTTP response status code.

_**statusText ( string )**_<br>
> HTTP response status text.

_**headers ( [Headers](#class-headers) )**_<br>
> HTTP response headers.

_**challengeResponse ( string )**_<br>
> Challenge response.



### Class: WebSocketFrame

_Type: object_

### Properties

_**opcode ( number )**_<br>
> WebSocket frame opcode.

_**mask ( boolean )**_<br>
> WebSocke frame mask.

_**payloadData ( string )**_<br>
> WebSocke frame payload data.



### Class: CachedResource

_Type: object_

### Properties

_**url ( string )**_<br>
> Resource URL.

_**type ( [Page.ResourceType](Page.md#class-resourcetype) )**_<br>
> Type of this resource.

_**response ( optional [Response](#class-response) )**_<br>
> Cached response data.

_**bodySize ( number )**_<br>
> Cached response body size.



### Class: Initiator

_Type: object_

### Properties

_**type ( string enumerated ["parser","script","other"] )**_<br>
> Type of this initiator.

_**stackTrace ( optional [Console.StackTrace](Console.md#class-stacktrace) )**_<br>
> Initiator JavaScript stack trace, set for Script only.

_**url ( optional string )**_<br>
> Initiator URL, set for Parser type only.

_**lineNumber ( optional number )**_<br>
> Initiator line number, set for Parser type only.





