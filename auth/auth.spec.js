const supertest = require("supertest")
const server = require("../index")
const db = require("../database/dbConfig")

test("post user", async () => {
    await db.seed.run()
    const res = await supertest(server)
        .post("/api/register")
        .send({ username: "bob", password: "bob123" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.username).toMatch(/bob/i)
})

test("post login", async () => {
    await db.seed.run()
    const res = await supertest(server)
        .post("/api/login")
        .send({ username: "bill", password: "bill123" })
    expect(res.status).toBe(500)
})