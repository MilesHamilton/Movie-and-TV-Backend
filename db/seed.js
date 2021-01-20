const token = require("../models/token")

token.deleteMany({}).then((res) => {
	console.log(res)
})
