const router = require("../routes")
router.use(parser.json())

const getToken = async () => {
	await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization":
				"Basic" +
				btoa(
					process.env.SPOTIFY_CLIENT_ID +
						":" +
						process.env.SPOTIFY_CLIENT_SECRET
				),
		},
		body: "grant_type=client_credentials",
	})
	const data = await result

	router.get("/", (req, res) => {
		res.json(data)
	})
}
