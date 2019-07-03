const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/dist')))
app.use(history())

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`site running on port ${port}!`));