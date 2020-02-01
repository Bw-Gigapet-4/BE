const db =  require("../database/dbConfig")

function food(id) {
    return db("foods")
        .where(id)
}

async function add(food) {
    await db("foods")
        .insert(food)
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