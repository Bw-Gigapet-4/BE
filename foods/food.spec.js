const supertest = require("supertest")
const server = require("../index")
const db = require("../database/dbConfig")

test("get food", async () => {
    const res = await supertest(server)
        .get("/api/food/1")
    expect(res.status).toBe(403)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("you shall not pass")
})

test("post food", async () => {
    const res = await supertest(server)
        .post("/api/add/1")
        .send({ "food": "burgers", "serving_size": 1 })
    expect(res.status).toBe(403)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("you shall not pass")
})

test("delete food", async () => {
    const res = await supertest(server)
        .del("/api/remove/5")
    expect(res.status).toBe(403)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("you shall not pass")
})