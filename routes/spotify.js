const express = require("express")
const router = new express()
const parser = require("body-parser")
const fetch = require("node-fetch")
const btoa = require("btoa")
router.use(parser.json())

const getToken = async () => {
	const result = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization":
				"Basic" +
				Buffer.from(
					process.env.SPOTIFY_CLIENT_ID +
						":" +
						process.env.SPOTIFY_CLIENT_SECRET
				),
		},
		body: "grant_type=client_credentials",
	})
	const data = await result.json()
	console.log(data)

	router.get("/", (req, res) => {
		res.json(data)
		console.log(res)
	})
}
getToken()

module.exports = router
