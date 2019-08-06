const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'dist')))
//app.use(express.static(path.join(__dirname, '/dist')))
app.use(history())

//app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`site running on port ${port}!`));