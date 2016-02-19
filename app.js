var express = require('express');
var app = express();


app.set('views', './views');
app.set('view engine', 'xtpl');
app.use(express.static('public'));


var index = require('./routes/index')
var api = require('./routes/api')

app.use('/', index)
app.use('/api', api)


var server = app.listen(3001, function () {
    console.log('app start.');
});