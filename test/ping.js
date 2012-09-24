
var id = 0;

function ping(inspector, callback) {
    var newId = ++id;
    var msg = "pong-" + newId;

    inspector.Runtime.evaluate(JSON.stringify(msg), function (err, res) {
        if (err) return callback(err, null);

        callback(null, res.result.value === msg);
    });
}
module.exports = ping;
