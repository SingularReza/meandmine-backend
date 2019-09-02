var Update = require('./db.js').update

exports.create = function (update, done) {
    var newUpdate = new Update(update)

    newUpdate.save(function (err, value) {
        if (err) return handleError(err)
        console.log('update created')
        done(value)
    })
}