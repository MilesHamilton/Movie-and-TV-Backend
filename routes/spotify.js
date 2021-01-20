const express = require("express")
const router = new express()
const parser = require("body-parser")
const fetch = require("node-fetch")
const btoa = require("btoa")
const fs = require("fs")
const Token = require("../models/token")
router.use(parser.json())

const getToken = async () => {
	const result = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization":
				"Basic " +
				btoa(
					process.env.SPOTIFY_CLIENT_ID +
						":" +
						process.env.SPOTIFY_CLIENT_SECRET
				),
		},
		body: "grant_type=client_credentials",
	})
	const MongoClient = require("mongodb").MongoClient
	const url = "mongodb://localhost:27017/list"
	const data = await result.json()
	console.log(result)
	console.log(data)

	Token.deleteMany({}).then((res) => {})
	Token.insertMany(data).then((res) => {
		db.close
	})

	router.get("/", (req, res) => {
		console.log(data)
	})

	const key = fs.readFileSync()

	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log(err)
		}
	})
}
getToken()

// router.get("/", (req, res) => {
// 	Token.find({}).then((token) => {
// 		res.json(token)
// 	})
// })

module.exports = router
