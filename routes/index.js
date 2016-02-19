var express = require('express')
var router = express.Router()

var db = require('../libs/db')


router.get('/', function (req, res) {
    var roomDb = db.getRoom()

    roomDb.done(function (data) {
        var renderRoomData = data.map(function (item, index) {
            return {
                id: item.id,
                title: item.name,
                eventColor: item.color
            }
        })

        res.render('index', {
            now: new Date(),
            rooms: JSON.stringify(renderRoomData)
        })
    })

})


module.exports = router