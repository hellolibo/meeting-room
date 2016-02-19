var mysql = require('mysql');
var Q = require('q')

var remoteDB = {
    host: '182.92.78.14',
    user: 'root',
    password: 'biPasswdRemote',
    database: "tms"
}

var localDB = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "meeting"
}


var connection = mysql.createConnection(localDB);


exports.getRoom = function () {

    var sqlDefer = Q.defer()

    connection.query('SELECT * FROM room', function (err, rows, fields) {

        if (!err) {
            sqlDefer.resolve(rows)
        } else {
            sqlDefer.reject(err)
        }

    })

    return sqlDefer.promise

}