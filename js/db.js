const mongoose = require('mongoose')

var db = mongoose.connection;

mongoose.connect('placeholder', { useNewUrlParser: true })

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected!')
})

var Schema = mongoose.Schema

var article = new Schema({
    title: String,
    titleImage: String,
    subtext: String,
    pretext: String,
    tags: Array,
    content: String,
    images: Array,
    date: Date,
})


var update = new Schema({
    title: String,
    text: String,
    date: Date,
    image: String
})

var resource = new Schema({
    title: String,
    link: String,
    text: String
})

var Article = mongoose.model('article', article, 'articles')
var Update = mongoose.model('updates', update)
var Resource = mongoose.model('resources', resource)

exports.article = Article
exports.update = Update
exports.resource = resource
