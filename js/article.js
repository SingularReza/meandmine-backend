var Article = require('./db.js').article
var StubbedArticle = require('./db.js').stubbed

exports.create = function(article, done) {
    var newArticle = new Article(article)

    newArticle.save(function(err, article) {
        if(err) return handleError(err)
        console.log('article created')
        done(article)
    })
}

exports.findArticle = function(articleID, done) {
    Article.findOne(
        { _id: articleID },
        function (err, found) {
            if (err) throw err
            if (found) {
                done(found)
            } else {
                done(404)
            }
        }
    )
}

exports.getArticleList = function(done) {
    stubbedArticle.find({}, function (err, found) {
        if(err) throw err
        if (found) {
            done(found)
        } else {
            done(404)
        }
    })
}