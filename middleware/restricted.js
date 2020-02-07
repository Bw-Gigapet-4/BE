const userModel = require("../users/user-model")

module.exports = () => {
    return (req, res, next) => {
        console.log('from midwear',req.session.token)
        if (!req.headers.authorization) {
            return res.status(403).json({
              message: "you shall not pass"
            })
        }
        next()
    }
}
