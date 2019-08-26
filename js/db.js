const mongoose = require('mongoose')

var db = mongoose.connection;

mongoose.connect('mongodb://134.209.152.214:27017/site', { useNewUrlParser: true })

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

var Blog = mongoose.model('articles', article)

exports.article = Blog