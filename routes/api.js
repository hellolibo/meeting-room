var express = require('express')
var router = express.Router()

var db = require('../libs/db')

router.get('/rooms', function (req, res) {

    var roomsDb = db.getRooms()

    roomsDb.done(function (data) {
        var formatData = data.map(function (item, index) {
            item.title = item.name
            item.eventColor =item.color
            return item
        })
        res.send(formatData)
    })

})

router.get('/events', function(req, res){
    
    var start = req.query.start
    var end = req.query.end

    var eventsDb = db.getEvents(start, end)

    eventsDb.done(function(data){
        res.send(data)
    })
})


module.exports = router