var Update = require('./db.js').update

exports.create = function (update, done) {
    var newUpdate = new Update(update)

    newUpdate.save(function (err, value) {
        if (err) return handleError(err)
        console.log('update created')
        done(value)
    })
}

exports.getLatestUpdates = function (done) {
    Update.find({})
      .sort({ createdAt: -1 })
        .limit(4).exec(function (err, found) {
            if (err) throw err
            if (found) {
                done(found)
            } else {
                done(404)
            }
        })
}

exports.findLatest = function (done) {
    Update.find({})
      .sort({ createdAt: -1 })
        .limit(4).exec(function (err, found) {
            if (err) throw err
            if (found) {
                done(found)
            } else {
                done(404)
            }
        })
}