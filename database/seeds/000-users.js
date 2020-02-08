exports.seed = async (knex) => {
  await knex("users").truncate()
  await knex("foods").truncate()
  await knex("users").insert([
    { username: "Admin", password: "$2a$10$stgTxoSAnAQQ1jvIfum6ne1M6jsNLbEoU.vXxDIeCLiTaQvcDjwoa" },
    { username: "Test", password: "$2a$10$A8ZUhopkVs4D7zEc9Kj/ve8BBUAMMXnMeHEm8AhB8KykexhdGcnmW" }
  ])
  await knex("foods").insert([
    { food: "strawberries", serving_size: 1, user_id: 1, category: "fruit", date: "2020-02-08" },
    { food: "bananas", serving_size: 2, user_id: 1, category: "fruit", date: "2020-02-08" },
    { food: "bread", serving_size: 3, user_id: 2, category: "starch", date: "2020-02-08" },
    { food: "deer steak", serving_size: 4, user_id: 2, category: "meat", date: "2020-02-08" }
  ])
}