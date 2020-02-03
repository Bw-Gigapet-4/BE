const express = require("express")
const restricted = require("../middleware/restricted")
const db = require("./user-model")

const router = express.Router()

router.get("/users", restricted(), (req, res, next) => {
    db.findBy()
})

module.exports = router