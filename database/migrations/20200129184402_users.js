
exports.up = async function(knex) {
    await knex.schema.createTable("users", (users) => {
        users.increments()
        users.string("username", 128).notNullable().unique()
        users.string("password", 128).notNullable()
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
