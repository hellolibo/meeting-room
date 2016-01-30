var express = require('express');
var app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:"meeting"
});


app.set('views', './views');
app.set('view engine', 'xtpl');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {
        now: new Date()
    });
});

app.get('/api/room', function (req, res) {

    var json = [];

    connection.connect();

    connection.query('SELECT * from room', function(err, rows, fields) {
        // rows.forEach(function(item, index){
        //     json.push(item)
        //     console.log(item)
        // })

        console.log(rows)

    });

    connection.end();

    res.send(JSON.stringify(json));

});


var server = app.listen(3000, function () {
    console.log('app start.');
});