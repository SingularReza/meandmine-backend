const express = require('express');
const path = require('path');
const cors = require('cors');
var article = require('./js/article.js');
const bodyParser = require('body-parser');
const multer = require('multer');
const history = require('connect-history-api-fallback');
const port = 3000;

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({storage : storage}).any()

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'dist')))
//app.use(express.static(path.join(__dirname, '/dist')))
app.use(history())

app.get('/', (req, res) => res.send('backend'))
app.get('/blog/:id', (req, res) => res.send('blog data'))

app.post('/article/create/:id', (req, res) => {
    upload(req, res, function(err) {
        if (err) throw err;
        else {
            console.log('file successfully uploaded')
            console.log(req.body, req.files)
            res.send('done')
        }
    })
})

app.listen(port, () => console.log(`site running on port ${port}!`));