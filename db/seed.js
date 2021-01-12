// const getToken = () => {
// 	app.get("/", function (req, res) {
// 		let code = req.query.code || null
// 		let authOptions = {
// 			url: "https://accounts.spotify.com/api/token",
// 			form: {
// 				code: code,
// 				redirect_uri,
// 				grant_type: "client_credentials",
// 			},
// 			headers: {
// 				"Content-Type": "application/x-www-form-urlencoded",
// 				"Authorization":
// 					"Basic " +
// 					new Buffer(
// 						process.env.SPOTIFY_CLIENT_ID +
// 							":" +
// 							process.env.SPOTIFY_CLIENT_SECRET
// 					).toString("base64"),
// 			},
// 			json: true,
// 		}
// 		request.post(authOptions, function (error, response, body) {
// 			var access_token = body.access_token
// 			// let uri = process.env.FRONTEND_URI || "http://localhost:3000"
// 			// res.redirect(uri + "?access_token=" + access_token)
// 			res.json(access_token)
// 		})
// 	})
// }

// getToken()

// setInterval(getToken, 1000 * 60 * 60)
