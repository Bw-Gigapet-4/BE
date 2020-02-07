require("dotenv").config()
const express = require("express")
const server = express()
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)
const helmet = require("helmet")
const cors = require("cors")
const auth = require("./auth/auth-router")
const food = require("./foods/food-router")
const users = require("./users/user-router")
const dbConfig = require("./database/dbConfig")
const port = process.env.PORT || 5000
const host = process.env.HOST || "0.0.0.0"

const sessionConfig = {
    name: "token",
    secret: "secrets is hard",
    resave: false,
    savedUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: false,
        httpOnly: true
    },
    store: new KnexSessionStore({
        knex: dbConfig,
        createtable: true
    })
}

server.use(express.json())
server.use(session(sessionConfig))
server.use(helmet())
server.use(cors())

server.get("/", (req, res, next) => {
    res.status(200).json({
        message: "working"
    })
})

server.use("/api", auth)
server.use("/api", food)
server.use("/users", users)

// server.use((err, req, res, next) => {
//     console.log(err)
//     res.status(500).json({
//         error: "come back later when its fixed"
//     })
// })


if (!module.parent) {
    server.listen(port, host, () => {
        console.log(`running on ${port}`)
    })
} else {
    module.exports = server
}