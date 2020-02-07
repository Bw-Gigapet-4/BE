const bcrypt = require("bcryptjs")
const express = require("express")
const userModel = require("../users/user-model")
const jwt = require("jsonwebtoken")
const secrets = require("../config/secrets")

const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const saved = await userModel.add(req.body)

        res.status(201).json(saved)
    } catch(err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const [user] = await userModel.findBy({username: req.body.username})
        console.log("*************" + user + "********************")
        
        if (user) {
            let valid = await bcrypt.compare(req.body.password, user.password)
            if (valid) {
                const token = generateToken(user)
                req.session.token = user
                res.status(201).json({
                    message: `welcome ${user.username}`,
                    token
                })
            }
        } else {
            res.status(404).json({
                message: "user not found"
            })

        // let valid = await bcrypt.compare(req.body.password, user.password)

        // if (user && valid) {

        // } 
        }
    } catch(err) {
        console.log(err)
        next(err)
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const secret = secrets.jwtSecret
    const options = {
        expiresIn: "8h"
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router