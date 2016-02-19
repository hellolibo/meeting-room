var express = require('express')
var router = express.Router()

var db = require('../libs/db')

router.get('/room', function (req, res) {

    var roomDb = db.getRoom()

    console.log(roomDb)

    roomDb.done(function (data) {
        res.send(data)
    })

})


module.exports = router