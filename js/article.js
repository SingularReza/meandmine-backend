var Article = require('./db.js').article

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
    Article.find({}, { 'fieldToInclude': 1, 'title': 1, 'titleImage': 1, 'subtext': 1},
        function (err, found) {
            if(err) throw err
            if (found) {
                done(found)
            } else {
                done(404)
            }
        })
}

exports.findLatest = function(done) {
    Article.find({})
      .sort({createdAt: -1})
        .limit(4).exec(function(err, found) {
            if (err) throw err
            if (found) {
                done(found)
            } else {
                done(404)
            }
        })
}