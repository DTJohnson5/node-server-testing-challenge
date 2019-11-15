const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("should set the testing environment.", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return a status code of 200.", () => {
      return request(server).get("/").then(res => {expect(res.status).toBe(200)});
      
    });

    it("should return the appropriate structure.", async () => {
      const res = await request(server).get("/");
      expect.objectContaining({
        book: expect.any(String),
        author: expect.any(String)
      });
    });
  });
});