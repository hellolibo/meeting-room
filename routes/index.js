var express = require('express')
var router = express.Router()

var db = require('../libs/db')


router.get('/', function (req, res) {

    res.render('index', {
        now: new Date()
    })

})


module.exports = router