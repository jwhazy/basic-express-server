const express = require("express")
const helmet = require("helmet")
const app = express()

app.use(helmet())
app.use(require("./routes"))

app.listen(80)
console.log("Server alive.")