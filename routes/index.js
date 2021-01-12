const express = require("express")
const app = express()

app.use("/", require("./spotify"))

module.exports = app
