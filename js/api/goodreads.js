// Gets my current reading list from goodreads

const fetch = require('node-fetch');

fetch('https://www.goodreads.com/search.xml?key=fzqDp3iBXecBFEqekvzTA&q=Ender%27s+Game')
    .then(res => {
        console.log(res.data)
    })