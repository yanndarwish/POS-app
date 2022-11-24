require("dotenv").config()
const { users, sales, days, products } = require("./db.json")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("./middleware/auth")
const authorize = require("./middleware/authorize")
const express = require("express")

const app = express()

app.use(express.json())

app.post("/register", async (req, res) => {
	try {
		// get user input
		const { firstName, lastName, email, password, isAdmin } = req.body

		// validate user input (make sure all data has been provided)
		if (!(email && password && firstName && lastName && isAdmin)) {
			res.status(400).send("All inputs are required")
		}

		// check if user already exists in db
		const oldUser = users.find((user) => user.email === email)

		if (oldUser) {
			return res.status(409).send("User already exists. Please Login.")
		}

		// encrypt password
		const encryptedPassword = await bcrypt.hash(password, 10)

		// create user in our db
		const user = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: encryptedPassword,
            isAdmin: isAdmin
		}

		// create token
		const token = jwt.sign(user, process.env.TOKEN_KEY, {
			expiresIn: "2h",
		})

		// save user token
		user.token = token

		// return a new user
		const response = await fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
		const data = await response.json()
		console.log(data)
		res.status(200).json(user)
	} catch (err) {
		console.log(err)
	}
})

app.post("/login", async (req, res) => {
	try {
		// get user input
		const { email, password } = req.body

		// validate user input
		if (!(email && password)) {
			res.status(400).send("All inputs are required")
		}

		// validate if user exists in db
		const foundUser = users.find((user) => user.email === email)

		if (foundUser && (await bcrypt.compare(password, foundUser.password))) {
			// create token
			const token = jwt.sign(foundUser, process.env.TOKEN_KEY, {
				expiresIn: "2h",
			})

			// update user's token
			const user = {
				...foundUser,
				token: token,
			}

			// save user token
			const response = await fetch(
				`http://localhost:3000/users/${foundUser.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				}
			)
			const data = await response.json()
			console.log(data)

			res.status(200).json({ token: token })
		}
		res.status(400).send("Invalid Credentials")
	} catch (err) {
		console.log(err)
	}
})

app.get("/profile", auth, async (req, res) => {
    console.log(req.user)

	res.status(200).send(req.user)
})

app.get("/profiles", authorize, async (req, res) => {
	const response = await fetch("http://localhost:3000/users")
	const data = await response.json()
	res.status(200).send(data)
})

module.exports = app
