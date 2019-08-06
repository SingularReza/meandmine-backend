var MongoClient = require('mongodb').MongoClient

var state = {
    db: null,
}

exports.connect = function (done) {
    if (state.db) return done()

    MongoClient.connect('mongodb://134.209.152.214:27017/site', function (err, client) {
        if (err) return done(err)
        state.db = client.db('site')
        done()
    })
}

exports.get = function () {
    return state.db
}

exports.close = function (done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}