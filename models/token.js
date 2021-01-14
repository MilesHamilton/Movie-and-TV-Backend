const mongoose = require("../db/connections")

const Token = mongoose.Schema({
	access_token: String,
})

module.exports = mongoose.model("Token", Token)
