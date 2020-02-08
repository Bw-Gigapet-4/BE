const bcrypt = require("bcryptjs")
const express = require("express")
const userModel = require("../users/user-model")
const jwt = require("jsonwebtoken")
const secrets = require("../config/secrets")

const router = express.Router()

router.post("/register", async (req, res, next) => {
    console.log(req.body)
    try {
        const user = await userModel.add(req.body)
        
        console.log('user',user)
        
        const token = generateToken(user)

        req.session.token = user

        res.status(201).json({
            message: `welcome ${user.username}`,
            token,
            userId: user.id,
            username: user.username 
        })

        
    } catch(err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    console.log('login req.body',req.body)
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
                    token,
                    userId: user.id,
                    username: user.username 
                })
            }
        } else {
            res.status(404).json({
                message: "user not found"
            })
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