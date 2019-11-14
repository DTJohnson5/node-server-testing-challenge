const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("Should set the testing environment.", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("Get /", () => {
    it("Should return a status code of 200.", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("Should return the appropriate structure.", async () => {
      const res = await request(server).get("/");
      expect(res.body).objectContaining({
        book: expect.any(String),
        author: expect.any(String)
      });
    });
  });

  describe("Delete /", () => {
    it("Should return a status code of 201.", async () => {
      const res = await request(server).delete("/1");
      expect(res.status).toBe(201);
    });

    it("Should return a generic JSon message.", async () => {
      const res = await request(server).delete("/1");
      expect(res.type).toBe("application/json");
    });
  });
});