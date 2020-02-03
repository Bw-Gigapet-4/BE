const express = require("express")
const foodModel = require("./food-model")
const restricted = require("../middleware/restricted")

const router = express.Router()

router.get("/food/:id", restricted(), async (req, res, next) => {
    try {
        const id = req.params.id
        const foods = await foodModel.food(id)
        res.status(200).json(foods)
    } catch (err) {
        next(err)
    }
})

router.post("/add/:id", restricted(), async (req, res, next) => {
    try {
        const food = req.body
        await foodModel.add(food)
        res.status(201).json(food)

    } catch (err) {
        next(err)
    }
})

router.delete("/remove/:id", restricted(), async (req, res, next) => {
    try {
        const id = req.params.id
        await foodModel.remove(id)
        res.status(204).json({
            message: "removed"
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router