# Inspector
[![npm](http://img.shields.io/npm/v/inspector.svg?style=flat-square)](https://npmjs.com/inspector)
[![npm downloads](http://img.shields.io/npm/dm/inspector.svg?style=flat-square)](https://npmjs.com/inspector)

> Node.js binding for WebKit Inspector API

## Example

```JavaScript
var inspector = require('inspector');

var inspect = inspector(9222, '127.0.0.1', 'about:blank', function () {
    inspect.Page.enable(function (error) {
        if (error) throw error;

        inspect.Page.once('loadEventFired', function (response) {
            
            // window.onload emitted at this time `timestamp`:
            console.log(new Date(response.timestamp));
        });
    });
});
```

## Generating the Library & Documentation

The code and documentation is generated from the [WebKit repository](https://github.com/WebKit/webkit/)'s debugger protocol specification files.
**NOTE:** it's probably a good idea to remove the old files in `doc/` and `lib/` before regenerating them.
To generate the code & docs, run:

```sh
$ npm run generate
```

## API documetation

### inspect = inspector(port, host, href, [callback])

To connect a remote WebKit inspector you must first start the WebKit instance
with the remote debugger enabled. In Chrome this is done by adding the
`--remote-debugging-port=9222` process argument.

The inspector module will then try to connect to `http://127.0.0.1:9222/json`
if a connection coundn't be made within 2 seconds, it will emit and `error`
event.

Besides from the remote `port` and `host` you will also need to spefic the `href`
of the page that the inspector should connect to. Note that the page must already
be open, before the inspector module can connect to it.

The optional `callback` is executed once the `connect` event emits. It will
therefor only executeif a connection could be established successfully.

```JavaScript
var inspector = require('inspector');

var inspect = inspector(9222, '127.0.0.1', 'about:blank', function () {
    // connected
});
```

### inspect.close([callback])

Will close the WebSocket connection or stop the inspector from atempting to make
a connection.

Once everything is closed the `close` event will emit.

The optional `callback` is executed once the `close` event emits.

```JavaScript
inspect.close(function () {
    // inspector closed
});
```

### inspect[domain]

The WebKit Inspector is splited up intro subparts (called domains).

All WebKit Inspector domains are documented in the
[doc](https://github.com/Admazely/inspector/blob/master/doc/README.md)
directory.

#### inspect\[domain\]\[command\]\(parameters [...], callback\)

Commands are executed by by adding a `[command]` to the domain object, and then
call it by adding parameters and `callback` as descibed in the
[documentation](https://github.com/Admazely/inspector/blob/master/doc/README.md).

The callback is executed with an `error` argument there is either `null` or an
`Error` type. The second argument is a response object.

_Note that not all commands returns a `response` object._

Example where the document title is returned:

```JavaScript
inspect.Runtime.evaluate("document.title;", function (error, response) {
    if (error) throw error;

    // contains the document title
    console.log(response.result.value);
});
```

#### inspect[domain].on(eventname, callback)

The WebKit Inspector emits a lot of events, all events are associated with a
`domain` and are therefore only emitted on a `domain` object.

The event handler is only emitted with a single parameter, there is a object
containing properties as described in the
[documentation](https://github.com/Admazely/inspector/blob/master/doc/README.md).

Example on how to listen on the `loadEventFired`, note that you must call
`Page.enable()` first.

```JavaScript
inspect.Page.once('loadEventFired', function (response) {
    
    // window.onload emitted at this time `timestamp`:
    console.log(new Date(response.timestamp));
});
```

_Note: if the event isn't supported the inspector module will throw._

### Event: connect

Emitted once a connection is successfully established.

### Event: close

Emitted once all connections are closed. This is usually after `inspect.close()`
is called, but if the server closed the connection this event will also emit.

Once the `close` event has emitted the `inspect.closed` flag becomes `true`.

### Event: error

Emiited in case any error occurred. Note if you don't listen to this event
the error will be thrown.
