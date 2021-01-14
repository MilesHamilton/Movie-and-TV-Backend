const token = require("../models/token")
const tokenData = require("./OP")

token.deleteMany({}).then(() => {
	token
		.create(tokenData)
		.then((data) => {
			console.log(tokenData)
		})
		.catch((err) => {
			console.log(err)
		})
})
