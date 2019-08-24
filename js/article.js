var Article = require('../db/db.js').blog

exports.create = function(article, done) {
    var newArticle = new Article(article)

    newArticle.save(function(err, article) {
        if(err) return handleError(err)
        console.log('article created')
        done(article)
    })
}