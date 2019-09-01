const express = require('express');
const path = require('path');
const cors = require('cors');
const article = require('./js/article.js');
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
//app.use('/', express.static(path.join(__dirname, 'dist')))
app.use('/images', express.static(path.join(__dirname, 'images')))
//app.use(express.static(path.join(__dirname, '/dist')))
app.use(history())

//app.get('/', (req, res) => res.send('backend'))
//app.get('/images/:path', (res, req) => res.send())
app.get('/article/:id', (req, res) => {
    console.log('here')
    article.findArticle(req.params.id, function(content) {
        res.send(content)
    })
})

app.post('/article/create', (req, res) => {
    upload(req, res, function(err) {
        if (err) throw err;
        else {
            console.log('file successfully uploaded')
            //console.log(req.body, req.files)
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

app.listen(port, () => console.log(`site running on port ${port}!`));