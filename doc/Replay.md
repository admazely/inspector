# Replay

_Auto generated documentation for WebKit inspector

Controls web replay, and manages recording sessions and segments.


* Commands
 * [startCapturing](#replaystartcapturingcallback)
 * [stopCapturing](#replaystopcapturingcallback)
 * [replayToPosition](#replayreplaytopositionreplayposition-shouldfastforward-callback)
 * [replayToCompletion](#replayreplaytocompletionshouldfastforward-callback)
 * [pausePlayback](#replaypauseplaybackcallback)
 * [cancelPlayback](#replaycancelplaybackcallback)
 * [switchSession](#replayswitchsessionsessionidentifier-callback)
 * [insertSessionSegment](#replayinsertsessionsegmentsessionidentifier-segmentidentifier-segmentindex-callback)
 * [removeSessionSegment](#replayremovesessionsegmentsessionidentifier-segmentindex-callback)
 * [currentReplayState](#replaycurrentreplaystatecallback)
 * [getAvailableSessions](#replaygetavailablesessionscallback)
 * [getSessionData](#replaygetsessiondatasessionidentifier-callback)
 * [getSegmentData](#replaygetsegmentdatasegmentidentifier-callback)
* Events
 * [captureStarted](#event-capturestarted)
 * [captureStopped](#event-capturestopped)
 * [playbackHitPosition](#event-playbackhitposition)
 * [playbackStarted](#event-playbackstarted)
 * [playbackPaused](#event-playbackpaused)
 * [playbackFinished](#event-playbackfinished)
 * [inputSuppressionChanged](#event-inputsuppressionchanged)
 * [sessionCreated](#event-sessioncreated)
 * [sessionModified](#event-sessionmodified)
 * [sessionRemoved](#event-sessionremoved)
 * [sessionLoaded](#event-sessionloaded)
 * [segmentCreated](#event-segmentcreated)
 * [segmentRemoved](#event-segmentremoved)
 * [segmentCompleted](#event-segmentcompleted)
 * [segmentLoaded](#event-segmentloaded)
 * [segmentUnloaded](#event-segmentunloaded)
* Types
 * [SessionIdentifier](#class-sessionidentifier)
 * [SegmentIdentifier](#class-segmentidentifier)
 * [SessionState](#class-sessionstate)
 * [SegmentState](#class-segmentstate)
 * [ReplayPosition](#class-replayposition)
 * [ReplayInput](#class-replayinput)
 * [ReplayInputQueue](#class-replayinputqueue)
 * [SessionSegment](#class-sessionsegment)
 * [ReplaySession](#class-replaysession)


## Commands

### Replay.startCapturing(callback)

Starts capture of a new replay session.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.stopCapturing(callback)

Stops capture of the currently recording replay session.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.replayToPosition([ReplayPosition](#class-replayposition), shouldFastForward, callback)

Seek execution to a specific position within the replay session.

### Parameters

_**position ( [ReplayPosition](#class-replayposition) )**_<br>
_**shouldFastForward ( boolean )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.replayToCompletion(shouldFastForward, callback)

Replay all session segments completely.

### Parameters

_**shouldFastForward ( boolean )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.pausePlayback(callback)

Pauses playback in the current segment. Can be resumed by using a replay command.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.cancelPlayback(callback)

Cancels playback of the current segment. Further replaying will start from the beginning of the current segment.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.switchSession([SessionIdentifier](#class-sessionidentifier), callback)

Unloads the current replay session and loads the specified session

### Parameters

_**sessionIdentifier ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.insertSessionSegment([SessionIdentifier](#class-sessionidentifier), [SegmentIdentifier](#class-segmentidentifier), segmentIndex, callback)

Splices the specified session segment into the session at the specified index.

### Parameters

_**sessionIdentifier ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
_**segmentIdentifier ( [SegmentIdentifier](#class-segmentidentifier) )**_<br>
_**segmentIndex ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.removeSessionSegment([SessionIdentifier](#class-sessionidentifier), segmentIndex, callback)

Removes the session segment at the specified position from the session.

### Parameters

_**sessionIdentifier ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
_**segmentIndex ( integer )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### Replay.currentReplayState(callback)

Returns the identifier, position, session state and segment state of the currently loaded session. This is necessary because the inspector may be closed and reopened in the middle of replay.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**sessionIdentifier ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
_**segmentIdentifier ( optional [SegmentIdentifier](#class-segmentidentifier) )**_<br>
> If no segment is currently loaded, then there is no valid segment identifier.

_**sessionState ( [SessionState](#class-sessionstate) )**_<br>
_**segmentState ( [SegmentState](#class-segmentstate) )**_<br>
_**replayPosition ( [ReplayPosition](#class-replayposition) )**_<br>


### Replay.getAvailableSessions(callback)

Returns identifiers of all available sessions.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**ids ( array of [SessionIdentifier](#class-sessionidentifier) )**_<br>


### Replay.getSessionData([SessionIdentifier](#class-sessionidentifier), callback)

Returns an object for the specified session.

### Parameters

_**sessionIdentifier ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**session ( optional [ReplaySession](#class-replaysession) )**_<br>
> The requested serialized replay session.



### Replay.getSegmentData([SegmentIdentifier](#class-segmentidentifier), callback)

Returns an object for the specified session segment.

### Parameters

_**id ( [SegmentIdentifier](#class-segmentidentifier) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**segment ( optional [SessionSegment](#class-sessionsegment) )**_<br>
> The requested serialized session segment.



## Events

### Event: captureStarted

Fired when capture has started.


### Event: captureStopped

Fired when capture has stopped.


### Event: playbackHitPosition

Playback within the session has progressed up to this position, and is about to replay the input at the specified offset.

### Results

_**position ( [ReplayPosition](#class-replayposition) )**_<br>
> The playback position that was hit.

_**timestamp ( number )**_<br>
> A timestamp for the event.



### Event: playbackStarted

Fired when session playback has started.


### Event: playbackPaused

Fired when session playback has paused, but not finished.

### Results

_**position ( [ReplayPosition](#class-replayposition) )**_<br>
> The playback position immediately prior to where playback is paused.



### Event: playbackFinished

Fired when session playback has stopped.


### Event: inputSuppressionChanged

Fired when the replay controller starts or stops suppressing user inputs.

### Results

_**willSuppress ( boolean )**_<br>
> Whether user inputs will be suppressed during playback.



### Event: sessionCreated

Fired when a new replay session is created

### Results

_**id ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
> Identifier for the created session.



### Event: sessionModified

Fired when a session's segments have changed.

### Results

_**id ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
> Identifier for the session the segment was added to.



### Event: sessionRemoved

Fired when a replay session is removed and can no longer be loaded.

### Results

_**id ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
> Identifier for the removed session.



### Event: sessionLoaded

Fired when a replay session is loaded.

### Results

_**id ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
> Identifier for the loaded session.



### Event: segmentCreated

Fired when a new session segment is created.

### Results

_**id ( [SegmentIdentifier](#class-segmentidentifier) )**_<br>
> Identifier for the created session segment.



### Event: segmentRemoved

Fired when a session segment is removed and can no longer be replayed as part of a session.

### Results

_**id ( [SegmentIdentifier](#class-segmentidentifier) )**_<br>
> Identifier for the removed session segment.



### Event: segmentCompleted

Fired when a session segment is completed and can no longer have inputs added to it.

### Results

_**id ( [SegmentIdentifier](#class-segmentidentifier) )**_<br>
> Identifier for the completed session segment.



### Event: segmentLoaded

Fired when a segment is loaded.

### Results

_**segmentIdentifier ( [SegmentIdentifier](#class-segmentidentifier) )**_<br>
> Id for the loaded segment.



### Event: segmentUnloaded

Fired when a segment is unloaded.


## Types

### Class: SessionIdentifier

_Type: integer_

Unique replay session identifier.


### Class: SegmentIdentifier

_Type: integer_

Unique session segment identifier.


### Class: SessionState

_Type: string_

State machine's state for the session.


### Class: SegmentState

_Type: string_

State machine's state for the session segment.


### Class: ReplayPosition

_Type: object_

### Properties

_**segmentOffset ( integer )**_<br>
> Offset for a segment within the currently-loaded replay session.

_**inputOffset ( integer )**_<br>
> Offset for an event loop input within the specified session segment.



### Class: ReplayInput

_Type: object_

### Properties

_**type ( string )**_<br>
> Input type.

_**offset ( integer )**_<br>
> Offset of this input in its respective queue.

_**data ( object )**_<br>
> Per-input payload.



### Class: ReplayInputQueue

_Type: object_

### Properties

_**type ( string )**_<br>
> Queue type

_**inputs ( array of [ReplayInput](#class-replayinput) )**_<br>
> Inputs belonging to this queue.



### Class: SessionSegment

_Type: object_

A standalone segment of a replay session that corresponds to a single main frame navigation and execution.

### Properties

_**id ( [SegmentIdentifier](#class-segmentidentifier) )**_<br>
> Unique session segment identifier.

_**timestamp ( number )**_<br>
> Start time of the segment, in milliseconds since the epoch.

_**queues ( array of [ReplayInputQueue](#class-replayinputqueue) )**_<br>


### Class: ReplaySession

_Type: object_

An ordered collection of replay session segments.

### Properties

_**id ( [SessionIdentifier](#class-sessionidentifier) )**_<br>
> Unique replay session identifier.

_**timestamp ( number )**_<br>
> Creation time of session, in milliseconds since the epoch.

_**segments ( array of [SegmentIdentifier](#class-segmentidentifier) )**_<br>
> An ordered list identifiers for the segments that comprise this replay session.





