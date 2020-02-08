exports.seed = async (knex) => {
  await knex("users").truncate()
  await knex("foods").truncate()
  await knex("users").insert([
    { username: "Admin", password: "superSecurePass" },
    { username: "Test", password: "somewhatSecurePass" }
  ])
  await knex("foods").insert([
    { food: "strawberries", serving_size: 1, user_id: 1, category: "fruit", date: "2/7/2020" },
    { food: "bananas", serving_size: 2, user_id: 1, category: "fruit", date: "2/7/2020" },
    { food: "bread", serving_size: 3, user_id: 2, category: "starch", date: "2/7/2020" },
    { food: "deer steak", serving_size: 4, user_id: 2, category: "meat", date: "2/7/2020" }
  ])
}