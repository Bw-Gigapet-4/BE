const db =  require("../database/dbConfig")

function food(id) {
    return db("foods")
        .where("user_id", id)
}

async function add(food) {
    await db("foods")
        .insert(food)
        .where("user_id", food.user_id)
}

function remove(id) {
    return db("foods")
        .where({ id })
        .del()
}

module.exports = {
    food,
    add,
    remove
}