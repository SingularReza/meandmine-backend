const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID


var db = mongoose.connection;

mongoose.connect('mongodb://134.209.152.214:27017/mysite', { useNewUrlParser: true })

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected!')
})

var Schema = mongoose.Schema

var article = new Schema({
    //_id: new ObjectID(),
    title: String,
    titleImage: String,
    subtext: String,
    pretext: String,
    tags: Array,
    content: String,
    images: Array,
    date: Date,
})

var Article = mongoose.model('articles', article)

exports.article = Article