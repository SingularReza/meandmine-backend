//external imports
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')

// local imports
const anilist = require('./js/api/anilist.js')
const article = require('./js/article.js')
const update = require('./js/update.js')
const mal = require('./js/api/mal-api.js')
const image = require('./js/images.js')

//server port
const port = 3300;

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//blog related
app.get('/article/:id', (req, res) => {
    article.findArticle(req.params.id, function(content) {
        res.send(content)
    })
})

app.get('/articles/latest', (req, res) => {
    article.findLatest(function (list) {
        res.send(list)
    })
})

app.post('/article/create', (req, res) => {
    image.saveImages(req, res, function (err) {
        if (err) throw err;
        else {
            console.log('file successfully uploaded')
            var temp = req.body
            temp.titleImage = req.files[0].path
            temp.images = []
            Array.from(req.files).forEach(file => {
                if (file.fieldname === 'images') {
                    temp.images.push(file.path)
                }
            })
            temp.tags = JSON.parse(temp.tags)
            article.create(temp, function (saved) {
                res.send(saved)
            })
        }
    })
})

app.get('/blog/list', (req, res) => {
    article.getArticleList(function (list) {
        res.send(list)
    })
})

//update related
app.post('/update/create', (req, res) => {
    upload(req, res, function(err) {
        if (err) throw err;
        else {
            var temp = req.body
            temp.image = req.files[0].path
            update.create(temp, function (returned) {
                res.send(returned)
            })
        }
    })
})

app.get('/updates/latest', (req, res) => {
    update.findLatest(function(list) {
        res.send(list)
    })
})

//apis for mal-extensionand aanilist graphql data
app.get('/api/fansubs/:showId', async (req, res) => {
    mal.getGroups(req.params.showId, res)
})

app.get('/api/fansubs/:showId/:groupId', async (req, res) => {
    mal.getComments(req.params.showId, req.params.groupId, res)
})

app.get('/api/watching', (req, res) => {
    anilist.getCurrentAnime(res)
})

app.get('/api/reading', (req, res) => {
    anilist.getCurrentManga(res)
})

//pointing images directory to web
app.use('/', express.static(path.join(__dirname, 'dist')))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use(history())

// Should find out why i have to decalre the middleware the 2nd time
app.use('/', express.static(path.join(__dirname, 'dist')))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.listen(port, () => console.log(`site running on port ${port}!`));