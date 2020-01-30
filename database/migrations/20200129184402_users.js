
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.string("username", 128).notNullable().unique()
        table.string("password").notNullable()
    })

    await knex.schema.createTable("foods", (table) => {
        table.increments("id").notNullable()
        table.string("food").notNullable()
        table.string("serving_size")
        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
    await knex.schema.dropTableIfExists("foods")
};
