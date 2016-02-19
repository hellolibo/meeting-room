var mysql = require('mysql');
var Q = require('q')

var localDB = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "meeting"
}


var connection = mysql.createConnection(localDB);


exports.getRooms = function () {

    var sqlDefer = Q.defer()

    var sql = 'SELECT * FROM room'

    connection.query(sql, function (err, rows, fields) {

        if (!err) {
            sqlDefer.resolve(rows)
        } else {
            sqlDefer.reject(err)
        }

    })

    return sqlDefer.promise

}

exports.getEvents = function (start, end) {

    var sqlDefer = Q.defer()

    var sql = 'SELECT * FROM event WHERE start_time<=' + end + ' OR end_time >= ' + start

    connection.query(sql, function (err, rows, fields) {

        if (!err) {
            sqlDefer.resolve(rows)
        } else {
            sqlDefer.reject(err)
        }

    })

    return sqlDefer.promise

}