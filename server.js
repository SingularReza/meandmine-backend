const express = require('express');
const path = require('path');
const cors = require('cors');
const article = require('./js/article.js');
const update = require('./js/update.js');
const bodyParser = require('body-parser');
const multer = require('multer');
const history = require('connect-history-api-fallback');
const port = 3300;

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '|' + file.originalname.replace(/[_-]|\s/g, ""))
    }
})

var upload = multer({storage : storage}).any()

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'dist')))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use(history())

// Should find out why i have to decalre the middleware the 2nd time
app.use('/', express.static(path.join(__dirname, 'dist')))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/article/:id', (req, res) => {
    article.findArticle(req.params.id, function(content) {
        res.send(content)
    })
})

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

app.get('/articles/latest', (req, res) => {
    article.findLatest(function(list) {
        res.send(list)
    })
})

app.get('/updates/latest', (req, res) => {
    update.findLatest(function(list) {
        res.send(list)
    })
})

app.post('/article/create', (req, res) => {
    upload(req, res, function(err) {
        if (err) throw err;
        else {
            console.log('file successfully uploaded')
            var temp = req.body
            temp.titleImage = req.files[0].path
            temp.images = []
            Array.from(req.files).forEach(file => {
                if(file.fieldname === 'images') {
                    temp.images.push(file.path)
                }
            })
            temp.tags = JSON.parse(temp.tags)
            article.create(temp, function(saved) {
                res.send(saved)
            })
        }
    })
})

app.get('/blog/list', (req, res) => {
    article.getArticleList(function(list) {
        res.send(list)
    })
})

/*app.all('*', function(req, res) {
  res.redirect("http://www.mysite.com/");
});
*/

app.listen(port, () => console.log(`site running on port ${port}!`));