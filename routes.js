const express = require("express")
const helmet = require("helmet")
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/public/index.html`)
})

app.use(express.static('public'))

module.exports = app